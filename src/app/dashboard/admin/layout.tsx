import PanelControl from "@/components/PanelControl";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PanelControl />
      {children}
    </>
  );
}
