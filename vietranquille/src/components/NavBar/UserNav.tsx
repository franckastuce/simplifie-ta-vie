import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useContext } from "react"
import { Link } from "react-router-dom"



export function UserNav() {
  //const {isAuthenticated} = useContext(Auth)  /*{!isAuthenticated && (<>)</>))||()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w- text-gray-300">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none text-gray-300">SL</p>
            <p className="text-xs leading-none text-muted-foreground">
              <p className="text-gray-300">simplelife@fr.fr</p>
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <a href="/Profil" className="text-gray-300">Profile</a>
            <DropdownMenuShortcut className="text-gray-300">⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p className="text-gray-300">Facturation</p>
            <DropdownMenuShortcut className="text-gray-300">⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p className="text-gray-300">Réglage</p>
            <DropdownMenuShortcut className="text-gray-300">⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem><Link to="/Recover" className="text-gray-300">Accés rapide</Link></DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to="/Login">Ce Connecter</Link>
          <DropdownMenuShortcut className="">⇧⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default UserNav
