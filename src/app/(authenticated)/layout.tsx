import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="">
            <Header />
            <div className="w-full h-full pt-10">{children}</div>
            <Footer/>
        </div>
    );
}
