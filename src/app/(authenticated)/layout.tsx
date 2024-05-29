import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/Sidebar";
import {
  Album,
  Bell,
  Book,
  ChevronDownIcon,
  FileWarning,
  Home,
  ListVideo,
  LockIcon,
  LucideGamepad,
  Megaphone,
  Menu,
  Mic2,
  Music,
  Play,
  RadioIcon,
  RectangleHorizontal,
  SquareStack,
  User,
  Video,
} from "lucide-react";
import { getSession, mustBeLoggedIn } from "@/lib/auth";


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    {
      title: "Trang chủ",
      value: "",
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
      title: "Album",
      value: "album",
      icon: <Album size={15} className="mr-2" />,
    },
    {
      title: "Thử thách",
      value: "challenge",
      icon: <LucideGamepad size={15} className="mr-2" />,
    },
    {
      title: "Quảng cáo",
      value: "advertisement",
      icon: <Megaphone size={15} className="mr-2" />,
    },
    {
      title: "Gửi thông báo",
      value: "notification",
      icon: <Bell size={15} className="mr-2" />,
    },
    {
      title: "Đơn báo cáo",
      value: "reports",
      icon: <FileWarning size={15} className="mr-2" />,
    },
    {
      title: "Banners",
      value: "banners",
      icon: <RectangleHorizontal size={15} className="mr-2" />,
    },
    {
      title: "Người dùng",
      value: "credentials",
      icon: <LockIcon size={15} className="mr-2" />,
    },
  ];
  await mustBeLoggedIn();
  const session = await getSession();
  return (
    // 3A4652
    <div className="bg-gray-50">
      <Header session={session} />
      {/* 28313A */}
      <div className="flex flex-col lg:flex-row items-start justify-between bg-white">
        <Sidebar
          session={session}
          navItems={navItems}
          title="Navigation"
          className="w-full lg:basis-1/4 bg-transparent lg:z-10"
        />
        <main className="w-full min-h-screen bg-[#F6F6F6]">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
