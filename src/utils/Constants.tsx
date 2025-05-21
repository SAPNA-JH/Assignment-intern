import { Gauge, Mail, MessageSquareMore, Settings, ShoppingBasket, Users } from 'lucide-react';
import { IoChatbubblesOutline } from "react-icons/io5";
import { LuGitCompareArrows } from "react-icons/lu";
import { MdOutlineCardGiftcard, MdOutlineMan3, MdOutlinePeople } from "react-icons/md";
import { PiChartPieSlice } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";









export const mainMenu =[
        {
            item:"Dashboard",
            image:<Gauge />,
            
        },
         {
            item:"Products",
            image:<ShoppingBasket />,
            
        },
         {
            item:"Order",
            image:<MdOutlineCardGiftcard />,
            
        },
         {
            item:"Customers",
            image:    <Users />,
            
        },
         {
            item:"Chat",
            image:<IoChatbubblesOutline />,
            
        },

    ]
    export const other=[
        {
            item:"Email",
            image:<Mail />,
            
        },
         {
            item:"Analytics",
            image:<PiChartPieSlice />,
            
        },
         {
            item:"Integration",
            image:<LuGitCompareArrows />,
            
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
            image:<MdOutlinePeople />,
            
        },
    ]

    export const others= [
        {
            item:"Settings",
            image:    <Settings />,
            
        },
         {
            item:"Feedback",
            image:    <MessageSquareMore />,
            
        },
    ]