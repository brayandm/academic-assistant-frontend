import Logout from "@/components/Logout";
import { requiredRoles } from "@/lib/auth";

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await requiredRoles([]))) return <Logout />;
  return <>{children}</>;
}
