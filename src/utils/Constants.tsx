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