// import { Button } from "@/components/ui/button"
import Analytics from "@/component/dashboard/Analytics"
import Overviewcards from "@/component/dashboard/Overviewcards"
import ProjectOverview from "@/component/dashboard/ProjectOverview"
import SalesPerformance from "@/component/dashboard/SalesPerformance"
import TopProducts from "@/component/dashboard/TopProducts"
import TotalVisits from "@/component/dashboard/TotalVisits"
import { Button } from "@/components/ui/button"
import Sidebar from "../component/dashboard/Sidebar"
import Topbar from "../component/dashboard/Topbar"


const Dashboard = () => {
  return (
    <div className="flex overflow-y-scroll">
      <Sidebar />
      <div className="flex flex-col gap-4 flex-1 px-3">
        <Topbar />
        <div className=" flex flex-col md:flex-row gap-3 justify-between w-full">
          <div>
            <p className=" text-3xl font-medium">Dashboard</p>
            <p>Track your sales and performance </p>
          </div>
          <div className=" flex gap-3 items-center">
            <Button variant="outline">Filters & Sorts</Button>
            <Button>+ Add new</Button>
          </div>

        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
          <ProjectOverview />
          <Overviewcards />
          <Overviewcards />

          {/* <Overviews/> */}

        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
          <Analytics />
          <SalesPerformance />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <TotalVisits />
          <TopProducts />
        </div>
      </div>

    </div>
  )
}

export default Dashboard
