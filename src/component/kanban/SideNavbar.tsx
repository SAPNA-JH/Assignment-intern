import { BriefcaseBusiness, CalendarDays, Car, ChartPie, Codesandbox, CreditCard, FileStack, FileUser, Folder, FolderOpen, House, HousePlus, Inbox, Ruler, UsersRound } from 'lucide-react';













function SideNavbar() {
    return (
        <aside className='bg-gray-100 w-64 py-4 border-r  hidden lg:block'>
            <div className='flex font-bold  px-3 py-2 gap-2 items-center'>
                <House />
                <p>Roofinity</p>
            </div>
            <div className='px-3 py-3'>
                <div className='flex text-sm text-gray-500 item-center px-3 py-2 font-semibold gap-2 hover:border rounded-md hover:bg-white hover:text-black  '>
                <HousePlus />
                <p>Home</p>
               </div>
               <div className='flex text-sm text-gray-500 item-center font-semibold px-3 py-2 gap-2 hover:border rounded-md hover:bg-white hover:text-black '>
                    <BriefcaseBusiness />
                    <p>Jobs</p></div>
               <div className='flex text-sm text-gray-500 item-center px-3 py-2  font-semibold gap-2 hover:border rounded-md hover:bg-white hover:text-black'>
                    <CalendarDays />
                <p>Calendar</p></div>
               <div className='flex text-sm text-gray-500 item-center font-semibold px-3 py-2 gap-2 hover:border rounded-md hover:bg-white hover:text-black'>    
                <ChartPie />
                <p>Performance</p></div>
            </div>

            <div className='px-3 py-3'>
               <div className='px-3 py-3 '>
                 <p className='text-gray-500 uppercase text-sm'>Tools</p>
               </div>
                 <div className='flex text-sm text-gray-500 item-center px-3  py-2 font-semibold gap-2 hover:border rounded-md hover:bg-white hover:text-black  '>
                    <Codesandbox />
                   <p>Instant Estimator</p>
               </div>
               <div className='flex text-sm text-gray-500 item-center font-semibold px-3 py-2 gap-2 hover:border rounded-md hover:bg-white hover:text-black '>
                        <Ruler />
                    <p>Measurement</p></div>
               <div className='flex text-sm text-gray-500 item-center px-3 py-2  font-semibold gap-2 hover:border rounded-md hover:bg-white hover:text-black'>
                        <FileUser /> 
                <p>Proposals</p></div>
               <div className='flex text-sm text-gray-500 item-center font-semibold px-3 py-2 gap-2 hover:border rounded-md hover:bg-white hover:text-black'>    
                    <Car />
                <p>Materials Orders</p></div>
                <div className='flex text-sm text-gray-500 item-center font-semibold px-3 py-2 gap-2 hover:border rounded-md hover:bg-white hover:text-black'>    
                    <CreditCard />

                <p>Invoice & Payments</p></div>
            </div>
             <div className='px-3 py-3'>
               <div className='px-3 py-3 '>
                 <p className='text-gray-500 uppercase text-sm'>Manage</p>
               </div>
                 <div className='flex text-sm text-gray-500 item-center px-3  py-2 font-semibold gap-2 hover:border rounded-md hover:bg-white hover:text-black  '>
                        <UsersRound />
                   <p>Customers</p>
               </div>
               <div className='flex text-sm text-gray-500 item-center font-semibold px-3 py-2 gap-2 hover:border rounded-md hover:bg-white hover:text-black '>
                            <FolderOpen />
                    <p>File manager</p></div>
               <div className='flex text-sm text-gray-500 item-center px-3 py-2  font-semibold gap-2 hover:border rounded-md hover:bg-white hover:text-black'>
                            <Folder />
                <p>Catalog</p></div>
               <div className='flex text-sm text-gray-500 item-center font-semibold px-3 py-2 gap-2 hover:border rounded-md hover:bg-white hover:text-black'>    
                        <FileStack />
                <p>Automations</p></div>
                <div className='flex text-sm text-gray-500 item-center font-semibold px-3 py-2 gap-2 hover:border rounded-md hover:bg-white hover:text-black'>    
                        <Inbox />
                <p>Email & Text</p></div>
                
               
            </div>
        </aside>
    )
}

export default SideNavbar
