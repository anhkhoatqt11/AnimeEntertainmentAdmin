import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/Sidebar";
export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header />
            <div className="flex items-start justify-between">
                <Sidebar />
                <main className="w-full h-full">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}
