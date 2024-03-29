import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Book, ChevronDownIcon, Home, ListVideo, LucideGamepad, Menu, Mic2, Music, Play, RadioIcon, SquareStack, User, Video } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { usePathname } from "next/navigation";


type Menu = {
    label: string
    name: string
    icon: React.ReactNode
    submenu?: Submenu[]
    href: string
}

type Submenu = {
    name: string
    icon: React.ReactNode
    href: string
}

export function Sidebar() {
    const menus: Menu[] = [
        {
            label: "Khám phá",
            name: "Home",
            icon: <Home size={15} className="mr-2" />,
            href: "/",
        },
        // {
        //     label: "Library",
        //     name: "Playlist",
        //     icon: <Play size={15} className="mr-2" />,
        //     href: "/home/playlist",
        //     submenu: [
        //         {
        //             name: "Playlist 1",
        //             icon: <ListVideo size={15} className="mr-2" />,
        //             href: "/home/",
        //         },
        //         {
        //             name: "Playlist 2",
        //             icon: <ListVideo size={15} className="mr-2" />,
        //             href: "/home/",
        //         },
        //         {
        //             name: "Playlist 3",
        //             icon: <ListVideo size={15} className="mr-2" />,
        //             href: "/home/",
        //         },
        //     ],
        // },
        {
            label: "Nội dung",
            name: "Animes",
            icon: <Video size={15} className="mr-2" />,
            href: "/animes/",
        },
        {
            label: "Nội dung",
            name: "Comics",
            icon: <Book size={15} className="mr-2" />,
            href: "/comics/",
        },
        {
            label: "Nội dung",
            name: "Thử thách",
            icon: <LucideGamepad size={15} className="mr-2" />,
            href: "/challenges/",
        },
    ];

    const uniqueLabels = Array.from(new Set(menus.map((menu) => menu.label)));

    return (
        <ScrollArea className="h-screen lg:w-48 sm:w-full rounded-md">
            <div className="md:px-4 sm:p-0 mt-5 ">
                {uniqueLabels.map((label, index) => (
                    <React.Fragment key={label}>
                        {label && (
                            <p className={`mx-4 mb-3 text-xs text-left tracking-wider font-bold text-slate-300 ${index > 0 ? 'mt-10' : ''}`}>
                                {label}
                            </p>
                        )}
                        {menus
                            .filter((menu) => menu.label === label)
                            .map((menu) => (
                                <React.Fragment key={menu.name}>
                                    {menu.submenu && menu.submenu.length > 0 ? (
                                        <Accordion
                                            key={menu.name}
                                            type="single"
                                            className="mt-[-10px] mb-[-10px] p-0 font-normal"
                                            collapsible
                                        >
                                            <AccordionItem value="item-1" className="m-0 p-0 font-normal">
                                                <AccordionTrigger>
                                                    <a key={menu.name} className="w-full flex justify-start text-xs font-normal h-10 bg-background my-2 items-center p-4 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background rounded-md">
                                                        <div className={cn("flex justify-between w-full [&[data-state=open]>svg]:rotate-180")}>
                                                            <div className="flex">
                                                                <div className="w-6">{menu.icon}</div>
                                                                {menu.name}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    {menu.submenu.map((submenu) => (
                                                        <Link key={submenu.name} href={submenu.href} className="text-gray-400 mt-0 mb-0 flex text-xs h-10 bg-white dark:bg-background dark:hover:bg-primary dark:hover:text-background my-2 items-center p-4 hover:bg-primary hover:text-white rounded-md">
                                                            <div className="w-6">{submenu.icon}</div>
                                                            {submenu.name}
                                                        </Link>
                                                    ))}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    ) : (
                                        <div key={menu.name}>
                                            <Link href={menu.href} className="flex text-xs h-10 bg-white dark:bg-background my-2 items-center p-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-background hover:text-white rounded-md">
                                                <div className="w-6">{menu.icon}</div>
                                                {menu.name}
                                            </Link>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                    </React.Fragment>
                ))}
            </div>
        </ScrollArea>
    );
}