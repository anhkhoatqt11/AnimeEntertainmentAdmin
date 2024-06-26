import "./globals.css";
import type { Metadata } from "next";
// import { GeistSans } from 'geist/font/sans';
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/providers/QueryProvider";
import connectMongoDB from "@/lib/mongodb";
import { AuthProvider } from "./AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await connectMongoDB();
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Providers>
          <QueryProvider>
            <AuthProvider>
              <Toaster />
              {children}
            </AuthProvider>
          </QueryProvider>
        </Providers>
      </body>
    </html>
  );
}
