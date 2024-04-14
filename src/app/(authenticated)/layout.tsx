import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/Sidebar";
import {
  Book,
  ChevronDownIcon,
  Home,
  ListVideo,
  LucideGamepad,
  Menu,
  Mic2,
  Music,
  Play,
  RadioIcon,
  SquareStack,
  User,
  Video,
} from "lucide-react";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    {
      title: "Trang chủ",
      value: "home",
      icon: <Home size={15} className="mr-2" />,
    },
    {
      title: "Animes",
      value: "animes",
      icon: <Video size={15} className="mr-2" />,
    },
    {
      title: "Truyện tranh",
      value: "comics",
      icon: <Book size={15} className="mr-2" />,
    },
    {
      title: "Thử thách",
      value: "challenge",
      icon: <LucideGamepad size={15} className="mr-2" />,
    },
  ];
  return (
    <div className="bg-[#3A4652]">
      <Header />
      <div className="flex flex-col lg:flex-row items-start justify-between bg-[#28313A]">
        <Sidebar
          navItems={navItems}
          title="Navigation"
          className="w-full lg:basis-1/4 bg-transparent"
        />
        <main className="w-full min-h-screen bg-white">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
