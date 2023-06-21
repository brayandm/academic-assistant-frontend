import Logout from "@/components/Logout";
import { requiredPolicies } from "@/lib/auth";

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await requiredPolicies(["TEACHER_DASHBOARD_ACCESS"])))
    return <Logout />;
  return <>{children}</>;
}
