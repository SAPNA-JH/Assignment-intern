import { Gauge, Mail, MessageSquareMore, Settings, ShoppingBasket, Users } from 'lucide-react';
import { IoChatbubblesOutline } from "react-icons/io5";
import { LuGitCompareArrows } from "react-icons/lu";
import { MdOutlineCardGiftcard, MdOutlineMan3, MdOutlinePeople } from "react-icons/md";
import { PiChartPieSlice } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";









export const mainMenu =[
        {
            item:"Dashboard",
            image:<Gauge size={20} />,
            
        },
         {
            item:"Products",
            image:<ShoppingBasket size={20} />,
            
        },
         {
            item:"Order",
            image:<MdOutlineCardGiftcard size={20} />,
            
        },
         {
            item:"Customers",
            image:    <Users size={20} />,
            
        },
         {
            item:"Chat",
            image:<IoChatbubblesOutline size={20} />,
            
        },

    ]
    export const other=[
        {
            item:"Email",
            image:<Mail size={20} />,
            
        },
         {
            item:"Analytics",
            image:<PiChartPieSlice size={20} />,
            
        },
         {
            item:"Integration",
            image:<LuGitCompareArrows size={20} />,
            
        },
         {
            item:"Perfomance",
            image:<MdOutlineMan3 /> ,
            
        }
    ]

    export const account= [
        {
            item:"Accounts",
            image:<VscAccount />
,
            
        },
         {
            item:"Members",
            image:<MdOutlinePeople size={20} />,
            
        },
    ]

    export const others= [
        {
            item:"Settings",
            image:    <Settings size={20} />,
            
        },
         {
            item:"Feedback",
            image:    <MessageSquareMore size={20} />,
            
        },
    ]


    export const jobCards = [
    {
        taskLabel: "Tasks 0/2",
        location: "New York Drive, CA, USA",
        userName: "Briar House",
        avatarUrl: "https://github.com/shadcn.png",
        status: "New",
        time: "Just now"
    },
    {
        taskLabel: "Report Complete · Draft proposal",
        location: "London Road, Sheffield, UK",
        userName: "Aileen Foley",
        avatarUrl: "https://github.com/shadcn.png",
        status: "5 days",
        time: "Updated 6 days ago"
    },
    {
        taskLabel: "Report incomplete",
        location: "California 1, Malibu, CA, USA",
        userName: "Travis Rosario",
        avatarUrl: "https://github.com/shadcn.png",
        status: "5 days",
        time: "Updated 8 days ago"
    },
    {
        taskLabel: "Report Complete · Draft proposal",
        location: "Las Vegas Monorail, Nevada, USA",
        userName: "Finnley Todd",
        avatarUrl: "https://github.com/shadcn.png",
        status: "6 days",
        time: "Updated 7 days ago"
    },
    {
        taskLabel: "Tasks 0/2",
        location: "Tothill Street, London, UK",
        userName: "Joy Horton",
        avatarUrl: "https://github.com/shadcn.png",
        status: "7 days",
        time: "Updated 8 days ago"
    },
    {
        taskLabel: "Report canceled",
        location: "New York Drive, CA, USA",
        userName: "Eve Neal",
        avatarUrl: "https://github.com/shadcn.png",
        status: "5 days",
        time: "Updated 6 days ago"
    },
    {
        taskLabel: "Report Complete",
        location: "U K Circle, Winter Park, FL, USA",
        userName: "Paul Diaz",
        avatarUrl: "https://github.com/shadcn.png",
        status: "5 days",
        time: "Updated 6 days ago"
    }
];
