import React from "react";
import Stock from "./Stock";
import { Link } from "react-router-dom";


function SearchContext(){




    return(
        <div className="bg-loginInputBackdrop p-5">
            {/* Search bar container starts */}
            <div className="bg-navbarBG px-4 py-5 rounded-md">
                <input className="w-full px-6 py-4 rounded-md" placeholder="Search For Stocks and More"/>
                <div className="mt-4 w-1/6 flex items-center justify-between">
                    <div className="">
                        <Link className="capitalize underline font-semibold" to="#">recent stocks</Link>
                    </div>
                    <div className="">
                        <Link className="capitalize underline font-semibold" to="#">favourite stocks</Link>
                    </div> 
                </div>
            </div>
            {/* Search bar container ends */}

            {/* Stock List Container Starts*/}
            <div className="w-full h-[calc(60vh)] mt-4 overflow-y-auto no-scrollbar">
                <Stock />
                <Stock />
                <Stock />
                <Stock />
                <Stock />
                
                
            </div>
            {/* Stock List Container Ends*/}
        </div>
    )
};


export default SearchContext;