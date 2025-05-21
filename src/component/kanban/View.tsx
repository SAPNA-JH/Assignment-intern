import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoIosArrowDown } from "react-icons/io";

function View() {
  return (
    <section className="flex flex-col md:flex-row gap-3  justify-between items-center">
      <Tabs defaultValue="kanban" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="kanban">Kanban View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className=" flex gap-3 items-center">
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

        <Button variant="outline">Filters & Sorts</Button>
        <Button>+ Add new</Button>
      </div>
    </section>
  );
}

export default View;
