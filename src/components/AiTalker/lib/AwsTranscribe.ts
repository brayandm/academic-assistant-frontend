import MicrophoneStream from "microphone-stream";
import { Buffer } from "buffer";

type AwsTranscribeSettings = {
  userToken: string;
  awsTranscribeStreamerUrl: string;
  language: string;
};

class AwsTranscribe {
  SAMPLE_RATE = 48000;
  microphoneStream: MicrophoneStream | undefined;
  settings: AwsTranscribeSettings;
  timeoutId: NodeJS.Timeout | undefined;

  constructor(settings: AwsTranscribeSettings) {
    this.settings = settings;
  }

  async createMicrophoneStream() {
    this.microphoneStream = new MicrophoneStream();
    this.microphoneStream.setStream(
      await window.navigator.mediaDevices.getUserMedia({
        video: false,
        audio: {
          sampleSize: 16,
          channelCount: 1,
          sampleRate: this.SAMPLE_RATE,
        },
      })
    );
  }

  async startRecording(
    callback: (data: string) => void,
    onTimeout: (isAsleep: boolean) => void = () => {}
  ) {
    if (!this.settings.language) {
      return false;
    }
    if (this.microphoneStream) {
      this.stopRecording();
    }
    this.createMicrophoneStream();
    await this.startStreaming(this.settings.language, callback, onTimeout);
  }

  stopRecording() {
    if (this.timeoutId) clearTimeout(this.timeoutId);

    if (this.microphoneStream) {
      this.microphoneStream.stop();
      (this.microphoneStream as any).destroy();
      this.microphoneStream = undefined;
    }
  }

  startStreaming(
    language: string,
    callback: (data: string) => void,
    onTimeout: (isAsleep: boolean) => void = () => {}
  ) {
    const ws = new WebSocket(this.settings.awsTranscribeStreamerUrl);

    ws.onerror = console.error;

    ws.onopen = async () => {
      ws.send(
        JSON.stringify({
          setup: {
            token: this.settings.userToken,
            language: language,
          },
        })
      );

      for await (const chunk of this.getAudioStream()) {
        ws.send(
          JSON.stringify({
            AudioEvent: {
              AudioChunk: Array.from(chunk.AudioEvent.AudioChunk),
            },
          })
        );
      }
    };

    ws.onmessage = (message) => {
      const transcription = JSON.parse(message.data) as {
        data: string;
        isAsleep: boolean;
      };

      if (transcription.data) {
        callback(transcription.data);
      } else {
        onTimeout(transcription.isAsleep);
      }
    };
  }

  async *getAudioStream() {
    for await (const chunk of this.microphoneStream as unknown as Buffer[]) {
      if (chunk.length <= this.SAMPLE_RATE) {
        yield {
          AudioEvent: {
            AudioChunk: this.encodePCMChunk(chunk),
          },
        };
      }
    }
  }

  encodePCMChunk(chunk: Buffer) {
    const input = MicrophoneStream.toRaw(chunk);
    let offset = 0;
    const buffer = new ArrayBuffer(input.length * 2);
    const view = new DataView(buffer);
    for (let i = 0; i < input.length; i++, offset += 2) {
      let s = Math.max(-1, Math.min(1, input[i]));
      view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
    return Buffer.from(buffer);
  }
}

export default AwsTranscribe;
