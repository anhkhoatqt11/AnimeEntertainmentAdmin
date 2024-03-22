import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import Logo from "../logo"
import Link from "next/link"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
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
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { FaFolder, FaPlusCircle, FaUser } from "react-icons/fa"


export default async function Component() {
  return (
    <div className="mx-auto px-4 md:px-6 lg:px-8 mt-6 pb-4 shadow-sm">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Logo className="mr-6 flex flex-row gap-2" />
        <div className="ml-auto flex gap-2">

          <>
            <Button className="justify-self-end px-2 py-1 text-xs" variant="outline">
              <Link href="/login">Login</Link>
            </Button>
            <Button className="justify-self-end px-2 py-1 text-xs">Sign Up</Button>
          </>

          <ThemeSwitcher />
        </div >
      </header >
    </div >
  )
}
