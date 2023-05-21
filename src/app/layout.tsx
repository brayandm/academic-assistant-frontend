import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "@/providers/NextAuthProvider";
import { isTokenExpired } from "@/lib/auth";
import Logout from "@/components/Logout/Logout";
import { ApolloClientProvider } from "@/providers/ApolloClientProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (await isTokenExpired(session!)) {
    return <Logout />;
  }

  return (
    <NextAuthProvider session={session!}>
      <ApolloClientProvider uri={process.env.GRAPHQL_URL!}>
        <html lang="en">
          <head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </head>
          <body className={inter.className}>{children}</body>
        </html>
      </ApolloClientProvider>
    </NextAuthProvider>
  );
}
