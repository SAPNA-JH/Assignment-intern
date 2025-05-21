import { Bell } from 'lucide-react';
import { CiSearch } from "react-icons/ci";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { FiPlus } from "react-icons/fi";
import { RiExportFill } from "react-icons/ri";






function Topbar() {
  return (
    <header className=" w-full px-6 py-3 bg-white border-b flex justify-between items-center">
        {/* Search */}
        <div className=" flex items-center gap-2 border px-3 py-1.5 rounded-md text-sm w-full max-w-sm">
           <CiSearch className="text-gray-500 text-lg" />
            <input
          type="text"
          placeholder="Search"
           className="outline-none w-full text-sm"
        />


        </div>

        <div className='flex  items-center gap-4'>

          <div className='flex items-center gap-2'>

            <FcBusinesswoman />
            <FcBusinessman />
            <FiPlus />



          </div>
          <div>
              <Bell  className='border border-gray-400 rounded-md cursor-pointer'/>

        </div>

        <div className='border bg-orange-600 flex items-center gap-2  rounded-md p-2 text-white text-xs font-semibold'>
          <p>Export</p>
          <RiExportFill className='cursor-pointer'/>

        </div>
        </div>
    </header>
  )
}

export default Topbar
