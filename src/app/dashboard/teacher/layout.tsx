import Logout from "@/components/Logout";
import { requiredPolicies } from "@/lib/auth";

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await requiredPolicies(["TEACHER_PORTAL_ACCESS"]))) return <Logout />;
  return <>{children}</>;
}
