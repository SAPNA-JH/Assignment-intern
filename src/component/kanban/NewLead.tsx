import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ClipboardList } from 'lucide-react';

function LeadCard({ taskLabel, location, userName, avatarUrl, status, time } :{ taskLabel: any,location: any, userName: any, avatarUrl : any, status: any, time: any}) {
    return (
        <section className='flex flex-col bg-white border border-gray-200 rounded-lg gap-2 px-4 py-3 shadow-sm'>
            <div className="flex items-center gap-2 bg-gray-400 w-fit text-xs px-2 py-1 rounded-md text-white">
                <ClipboardList size={16} />
                <span>{taskLabel}</span>
            </div>

            <p className="text-sm font-medium text-gray-800">{location}</p>

            <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                    <AvatarImage src={avatarUrl} />
                    <AvatarFallback>{userName?.[0] ?? "U"}</AvatarFallback>
                </Avatar>
                <p className="text-sm text-gray-700">{userName}</p>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-2">
                <p>{status}</p>
                <p>{time}</p>
            </div>
        </section>
    );
}

export default LeadCard;
