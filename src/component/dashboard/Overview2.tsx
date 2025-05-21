import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"
import { InfoIcon } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
 
]


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "red",
  },
} satisfies ChartConfig

function Overview() {
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
      <div className=" w-max h-40">
        <ChartContainer className=" h-40 w-2/5 mx-auto" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </div>

    </section>
  )
}

export default Overview
