// import { Button } from "@/components/ui/button"
import Analytics from "@/component/dashboard/Analytics"
import Overviewcards from "@/component/dashboard/Overviewcards"
import ProjectOverview from "@/component/dashboard/ProjectOverview"
import SalesPerformance from "@/component/dashboard/SalesPerformance"
import TopProducts from "@/component/dashboard/TopProducts"
import TotalVisits from "@/component/dashboard/TotalVisits"
import Sidebar from "../component/dashboard/Sidebar"
import Topbar from "../component/dashboard/Topbar"


const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col gap-4 flex-1 px-3">
        <Topbar />
        <div className=" grid grid-cols-3 gap-3">
          <ProjectOverview />
          <Overviewcards />
          <Overviewcards />

        </div>
        <div className=" grid grid-cols-3 gap-3">
          <Analytics />
          <SalesPerformance />
        </div>
         <div className="grid grid-cols-3 gap-3">
        <TotalVisits/>
        <TopProducts/>
      </div>
      </div>
     
    </div>
  )
}

export default Dashboard
