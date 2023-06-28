import Logout from "@/components/Logout";
import { requiredPolicies } from "@/lib/auth";

export default async function AiAssistantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await requiredPolicies(["AI_ASSISTANT_DASHBOARD_ACCESS"])))
    return <Logout />;
  return <>{children}</>;
}
