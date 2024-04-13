import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/Sidebar";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#3A4652]">
      <Header />
      <div className="flex items-start justify-between bg-[#28313A]">
        <Sidebar />
        <main className="w-full min-h-screen bg-white">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
