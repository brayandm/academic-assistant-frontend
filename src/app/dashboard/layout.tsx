import MenuNavigation from "@/components/MenuNavigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MenuNavigation />
      {children}
    </>
  );
}
