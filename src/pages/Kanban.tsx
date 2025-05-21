import Navbar from "@/component/kanban/Navbar"
import SideNavbar from "@/component/kanban/SideNavbar"

function Kanban() {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideNavbar/>
      <div className="flex flex-col gap-4 flex-1 px-3">
              <Navbar/>
      </div>
    </div>
  )
}

export default Kanban
