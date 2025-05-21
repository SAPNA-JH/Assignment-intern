import Navbar from "@/component/kanban/Navbar";
import LeadCard from "@/component/kanban/NewLead";
import SideNavbar from "@/component/kanban/SideNavbar";
import View from "@/component/kanban/View";
import { jobCards } from "@/utils/Constants";

function Kanban() {

  const kanbanColumns = [
  {
    title: "New Lead",
    count: 3,
    amount: "$300.00",
    cards: jobCards.slice(0, 3),
    dotColor: "bg-orange-700"
  },
  {
    title: "Appointment Scheduled",
    count: 2,
    amount: "$200.00",
    cards: jobCards.slice(3, 5),
    dotColor: "bg-yellow-600"
  },
  {
    title: "Proposal Sent",
    count: 2,
    amount: "$250.00",
    cards: jobCards.slice(5),
    dotColor: "bg-blue-600"
  }
];
  return (
    <div className="flex  overflow-y-scroll">
      <SideNavbar />
      <div className="flex flex-col gap-4 flex-1 px-3">
        <Navbar />
        <View />

       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {kanbanColumns.map((column, index) => (
        <div
          key={index}
          className="h-full rounded-xl bg-gray-100 flex flex-col gap-4 px-4 py-5 w-full"
        >
          <div className="flex justify-between items-center">
            <p className="flex items-center gap-2 text-sm font-medium text-gray-800">
              <span className={`h-2 w-2 rounded-full ${column.dotColor}`}></span>
              {column.title}
              <span className="text-sm text-gray-500">({column.count})</span>
            </p>
            <p className="font-medium text-sm text-gray-700">{column.amount}</p>
          </div>

          {column.cards.map((card, i) => (
            <LeadCard key={i} {...card} />
          ))}
        </div>
      ))}
    </div>
      </div>
    </div>
  );
}

export default Kanban;
