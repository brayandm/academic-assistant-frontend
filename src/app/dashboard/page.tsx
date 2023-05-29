import Dashboard from "@/components/Dashboard";
import graphqlRequestServer from "@/lib/graphqlRequest";
import { getHeaders } from "@/utils/graphql";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const data = await graphqlRequestServer.getMe({}, getHeaders(session!));
  return <Dashboard username={data.me?.name!} />;
}
