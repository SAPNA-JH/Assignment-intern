// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
//   type ChartConfig,
// } from "@/components/ui/chart";
import { InfoIcon, MoveRight } from "lucide-react";
// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

// const chartData = [
//   { month: "January", desktop: 186 },
//   { month: "February", desktop: 305 },
 
// ]


// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "red",
//   },
// } satisfies ChartConfig

function Overviews() {
  return (
    <section className="flex  flex-col justify-between gap-3 col-span-1 border border-gray-400 rounded-xl px-3 py-5 text-sm ">
         
         
         
    
          <div className="flex justify-between">
            <div>
               <div className=" flex flex-col justify-evenly gap-3 ">
    
            <div className="flex">  <p className=" flex gap-1 text-gray-400 font-semibold">
              Active Sales <InfoIcon />
            </p></div>
            <div>
              <p className=" text-3xl text-black font-semibold">$27,064</p>
            </div>
            <div className=" flex gap-3">
              <p>vs last month</p>
              <p className=" px-1 py-1 rounded-sm text-green-400 bg-green-200">12%</p>
            </div>
          </div>
            </div>
            
          </div>
          <div>
             <div className="flex justify-center-safe gap-2 items-center border-t-2 border-gray-300">
            <p className="items-center font-semibold">
            See Details
          </p>
              <MoveRight />
          </div>
          </div>
    
          
      
    
        </section>
    
  )
}

export default Overviews



      // <div></div>
