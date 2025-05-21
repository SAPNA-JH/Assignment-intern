import { InfoIcon, MessageSquareMore, Users } from 'lucide-react';





function TotalVisits() {
  

  return (
    <section className='border border-gray-500  rounded-md grid col-span-1 '>
      <div className='flex justify-between  item-center px-3 py-3 '>
        <div className='text-orange-500 border border-gray-400 px-2 py-2 rounded-md h-max'>
              <Users />

        </div>
        <div className=''>
          <p className='flex gap-2'>Total visit by hourly <InfoIcon /></p>
          <p className=''>288,822 <span className="  rounded-sm text-green-400 bg-gray-200">4%</span> </p>

        </div>
        <div>
          <MessageSquareMore />
           </div>
      </div>

      <div>
        
      </div>
      
    </section>
  )
}

export default TotalVisits
