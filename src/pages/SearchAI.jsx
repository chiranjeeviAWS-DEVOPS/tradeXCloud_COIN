import React from "react";
import Navbar from "../components/Navbar";
import SearchAIContext from "../components/searchAI/SearchAIContext";
import Footer from "../components/Footer";
function SearchAI(){




    return(
        <div className="w-full">
            <div className="relative w-[calc(100%)] h-[calc(100vh)]">
                <img className="w-[calc(100%)] h-[calc(100vh)]" src="/login/backdrop.png" alt="background image" />
            </div>
            <div className="absolute top-0 opacity-70 w-[calc(100%)] h-[calc(100vh)] bg-gray-600"></div>  
            <div className="absolute w-full top-0">
                <Navbar />
                <div className="mt-28">
                    <SearchAIContext />
                </div>
                {
                    /* 
                         <div className="mt-28">
                            <SearchAIContext />
                        </div>
                    
                    */
                }
               
            </div>
            <Footer />
        </div>
    )
};



export default SearchAI;