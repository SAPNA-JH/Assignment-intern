import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { InfoIcon, MoveRight } from 'lucide-react';
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "red",
  },
} satisfies ChartConfig

function SalesPerformance() {
    return (
        <section className=' border border-gray-400 rounded-md col-span-1 px-3 py-5 '>
   
        
        <div className="flex  justify-between">
           <p className=" flex gap-1  font-semibold ">
          Sales Performance <InfoIcon  className="text-gray-400"/>
        </p>
        </div>
        <div>
           <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-40"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={50}
            outerRadius={90}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-xl font-bold"
                        >
                          {chartData[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>  
        </div>

        <div className=" border-t-2 border-gray-300 font-semibold pb-1 pt-1" >
          <div className="flex justify-around items-center ">
            <p>Total Sales per day </p>
            <p className="text-gray-400"> For week</p>
          </div>
          <div className="flex justify-around items-center">
            <p>Average sales</p>
            <p className="text-gray-400">For Today</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center-safe gap-2 items-center border-t-2 border-gray-300 pt-1">
        <p className="items-center font-semibold">
        See Details
      </p>
          <MoveRight />
      </div>
          
        </div>
        
           </section>
    )
}

export default SalesPerformance
