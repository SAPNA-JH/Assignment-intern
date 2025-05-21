import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { InfoIcon } from "lucide-react"
import { Pie, PieChart } from "recharts"
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },

]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "red",
  },
  safari: {
    label: "Safari",
    color: "orange",
  },

} satisfies ChartConfig

function Overviewcards() {
  return (
    <section className="flex justify-between gap-3 col-span-1 border border-gray-400 rounded-xl px-3 py-5 text-sm ">
      <div className=" flex flex-col justify-evenly">

        <div className="flex ">  <p className=" flex gap-1 text-gray-400 font-semibold">
          Active Sales <InfoIcon />
        </p></div>
        <div>
          <p className=" text-3xl">$27,064</p>
        </div>
        <div className=" flex gap-3">
          <p>vs last month</p>
          <p className=" px-1 py-1 rounded-sm text-green-400 bg-green-200">12%</p>
        </div>
      </div>
      <div className=" h-40">
         <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-48"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </div>

    </section>
  )
}

export default Overviewcards
