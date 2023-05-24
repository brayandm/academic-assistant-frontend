import Logout from "@/components/Logout";
import { requiredRoles } from "@/lib/auth";

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await requiredRoles(["TEACHER"]))) return <Logout />;
  return <>{children}</>;
}
