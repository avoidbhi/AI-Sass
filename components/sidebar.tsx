"use client";
import Link from "next/link";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({weight:"600",
                               subsets:["latin"]});
                               


const  Sidebar = () => {
    return(
        <div className="space-y-4 flex text-white flex-col h-full bg-[#111827]">
           <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image 
fill
                            alt="logo"
                            src="/genius-logo.png"
                        />
                    </div>
                   <div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                        Genius
                    </h1>
                   </div> 
                </Link>
                <div className="space-y-1">
                    {routes.map((route))}
                </div>
           </div>
        </div>
    );
    }
    
    export default Sidebar;
 