import { ChevronsLeft } from "lucide-react";
import { BsDiamondHalf } from "react-icons/bs";
import { account, mainMenu, other, others } from "../../utils/Constants";

function Sidebar() {
  return (
    <div>
      <aside className="bg-white w-64 py-4 border-r hidden lg:block">
        <div className="flex  justify-around items-center border-gray-300 rounded-lg shadow-2xs">
          <div className="">
            <BsDiamondHalf className="border border-black " />
          </div>
          <div className=" flex flex-col gap-1">
            <p className="font-bold text-lg"> Versility Inch</p>
          </div>
          <div>
            <ChevronsLeft className="border border-gray-300 shadow-2xs" />
          </div>
        </div>
        <nav className="flex flex-col px-2"> 
          <div className="py-3">

            <p className="text-gray-500 uppercase text-xs">Main Menu</p>
            {mainMenu.map((menu, index) => (
              <div key={menu.item || index}  className="flex items-center  cursor-pointer rounded-md gap-x-5 p-2">
                <div className="w-3 h-3 ">{menu.image}</div>
                <div className="text-black">{menu.item}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col py-3">

            <p className="text-gray-500 uppercase text-xs">other</p>
            {other.map((menu, index) => (
              <div key={menu.item || index}   className="flex items-center  cursor-pointer rounded-md gap-x-5 p-2">
                <div className="w-3 h-3">{menu.image}</div>
                <div className="text-black">{menu.item}</div>
              </div>
            ))}
          </div>
           <div className="flex flex-col py-3">

            <p className="text-gray-500 uppercase text-xs">account</p>
            {account.map((menu, index) => (
              <div key={menu.item || index}  className="flex items-center rounded-md gap-x-5 p-2">
                <div className="w-3 h-3">{menu.image}</div>
                <div className="text-black">{menu.item}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col py-3">

            {others.map((menu, index) => (
              <div key={menu.item || index} className="flex  items-center rounded-md gap-x-5 p-2">
                <div className="w-3 h-3">{menu.image}</div>
                <div className="text-black">{menu.item}</div>
              </div>
            ))}
          </div>

        
        </nav>
       
      </aside>
    </div>
  );
}

export default Sidebar;
