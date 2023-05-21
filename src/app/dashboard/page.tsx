import Dashboard from "@/components/Dashboard";
import { sdk } from "@/lib/client";
import { getHeaders } from "@/utils/graphql";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const data = await sdk.getMe({}, getHeaders(session!));
  return <Dashboard username={data.me?.name!} />;
}
