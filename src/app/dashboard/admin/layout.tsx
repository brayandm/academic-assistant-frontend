import PanelControl from "@/components/PanelControl";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <PanelControl />
        {children}
      </div>
    </>
  );
}
