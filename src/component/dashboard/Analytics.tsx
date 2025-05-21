import { Button } from "@/components/ui/button"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { InfoIcon } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

function Analytics() {
    return (
        <section className=' border border-gray-400 rounded-md col-span-2 px-4 py-5 '>
            <div className="flex  justify-between mb-4">
                 <p className=" flex gap-1 text-gray-400 font-semibold">
          Analytics <InfoIcon />
        </p>
               <div className=" flex items-center gap-3">
                 <p>
                    <DropdownMenu>
                        <DropdownMenuTrigger className=" flex gap-2 items-center">This Year </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Month</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Jan</DropdownMenuItem>
                            <DropdownMenuItem>Feb</DropdownMenuItem>
                            <DropdownMenuItem>March</DropdownMenuItem>
                            <DropdownMenuItem>April</DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>

                </p>
                <p>
                    <Button variant="outline">Filter</Button>
                </p>
               </div>
            </div>
            <ChartContainer className=" h-40 w-full" config={chartConfig}>
                        <AreaChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dot" />}
                            />
                            <Area
                                dataKey="mobile"
                                type="natural"
                                fill="orange"
                                fillOpacity={0.4}
                                stroke="orange"
                                stackId="a"
                            />
                            <Area
                                dataKey="desktop"
                                type="natural"
                                fill="red"
                                fillOpacity={0.4}
                                stroke="red"
                                stackId="a"
                            />
                        </AreaChart>
                    </ChartContainer>
        </section>
    )
}

export default Analytics
