import Logout from "@/components/Logout";
import { requiredPolicies } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await requiredPolicies(["ADMIN_DASHBOARD_ACCESS"]))) return <Logout />;
  return <>{children}</>;
}
