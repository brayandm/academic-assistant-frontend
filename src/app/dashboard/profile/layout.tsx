import Logout from "@/components/Logout";
import { requiredPolicies } from "@/lib/auth";

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await requiredPolicies([]))) return <Logout />;
  return <>{children}</>;
}
