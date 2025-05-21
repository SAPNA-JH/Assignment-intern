import { Settings } from 'lucide-react';
import { CiSearch } from "react-icons/ci";
import { FcBusinessman } from "react-icons/fc";

function Navbar() {
  return (
    <header className="rounded-t-md  px-2 py-2 ">
        <div className=" flex justify-between items-center ">
            <div className="p-3">
                <p className="font-bold text-xl">Jobs</p>
                <p>Sunday, March 04, 2025</p>
            </div>
            <div className='flex gap-3 px-2 py-2'>
               <div className=" flex items-center gap-2 border px-3 py-1 rounded-md text-sm w-full max-w-sm">
                       <CiSearch className="text-gray-500 text-lg" />
                        <input
                      type="text"
                      placeholder="Search"
                       className="outline-none w-full text-sm"
                    />
             </div>
             <div className='flex items-center gap-2'>
                    
                                 <Settings />  
                                <FcBusinessman />
                                                     
                              </div>
           
            </div>
        </div>
    </header>
  )
}

export default Navbar
