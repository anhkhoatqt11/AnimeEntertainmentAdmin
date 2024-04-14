import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Logo from "../logo";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { FaFolder, FaPlusCircle, FaUser } from "react-icons/fa";

export default async function Component() {
  return (
    <div className="bg-[#3A4652] px-3  py-3 shadow-md hidden lg:block">
      <div className="flex h-20 w-full justify-between bg-[#3A4652] shrink-0 items-center ">
        <Logo />
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
