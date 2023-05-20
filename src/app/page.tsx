import Dashboard from "@/components/Dashboard";
import { redirectLoginIfUnauthenticated } from "@/lib/auth";

export default async function Home() {
  await redirectLoginIfUnauthenticated();

  return <Dashboard />;
}
