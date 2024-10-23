import React from "react";
import Navbar from "../components/Navbar";
import DashboardContext from "../components/dashboard/DashboardContext";

function Dashboard(){




    return(
        <div className="">
             <div className="w-full">
            <div className="relative w-[calc(100%)] h-min-[calc(100vh)]">
                <img className="w-[calc(100%)] h-[calc(100vh)]" src="/login/backdrop.png" alt="background image" />
            </div>
            <div className="absolute top-0 opacity-70 w-[calc(100%)] h-[calc(100vh)] bg-gray-600"></div>  
            <div className="absolute w-full top-0">
                <Navbar />
                <div className="p-[1.5rem]">
                   <DashboardContext />
                </div>
            </div>
            
        </div>
        </div>
    )
};



export default Dashboard;