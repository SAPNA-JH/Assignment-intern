import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InfoIcon } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";

export default function ProjectOverview() {
  return (
    <section className=' flex flex-col gap-3 col-span-1 border border-gray-400 rounded-xl px-3 py-5 text-sm '>
      <div className=" flex justify-between">
       <p>
         <p className=" flex gap-1 text-gray-400 font-semibold">
          Project Overview <InfoIcon />
        </p>
        <p className=" text-3xl text-black font-semibold">$43,120</p>
       </p>
        <DropdownMenu>
          <DropdownMenuTrigger className=" px-3 py-1 rounded-md border border-gray-300 flex items-center gap-1 h-max text-black font-semibold">This Month <IoIosArrowDown className="font-semibold"/></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className=" flex justify-between items-center">
        <p>Select by Product</p>
        <p className=" flex gap-2 items-center font-semibold">New Sales <span className="text-gray-400">453</span><IoIosArrowDown /></p>
      </div>
      <div className=" flex gap-3 items-center mt-8 pt-4">
        <Button className=" bg-orange-500 w-28">Cosmetics</Button>
        <Button className=" bg-orange-500/50 w-28">Housewest</Button>

      </div>


    </section>
  )
}
