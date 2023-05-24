import Logout from "@/components/Logout";
import { requiredRoles } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await requiredRoles(["ADMIN"]))) return <Logout />;
  return <>{children}</>;
}
