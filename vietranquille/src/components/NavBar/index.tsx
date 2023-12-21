
import { MainNav } from "@/components/NavBar/MainNav"
import { Search } from "@/components/NavBar/Search"
import { UserNav } from "@/components/NavBar/UserNav"



function NavBar() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            {/* <TeamSwitcher /> */}
            <MainNav />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar