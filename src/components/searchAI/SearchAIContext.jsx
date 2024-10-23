import React,{ useState } from "react";
import SearchAICard from "./SearchAICard";



function SearchAIContext(){

    const [cards, setCards] = useState([
        {id: 1, title: "market overview", tags: ["trending tweets", "news effecting BTC", "sentiment"]},
        {id: 2, title: "project analysis", tags: ["compare projects", "tokenomics analysis", "whitepaper analysis"]},
        {id: 1, title: "trend", tags: ["coin trend", "NFT trend", "BTC trend"]}

    ]);

    return(
        <div className="px-4 py-5">
            <div className="bg-loginInputBackdrop p-5 h-[calc(75vh)] overflow-y-auto no-scrollbar">
                <div className="bg-navbarBG px-4 py-5 h-fit lg:h-[calc(70vh)] rounded-md flex items-center justify-center">
                    <div className=" ">
                        {/* Title Container Starts */}

                        
                        <div className="text-3xl text-center">
                            <h1 className="capitalize font-semibold">navigating <span className="font-bold text-searchAITextRed">crypto with AI</span> chat assitants</h1>
                        </div>
                        {/* Title Container Ends */}
                        {/* Search Container starts */}
                        
                        <div className="w-full mt-4 flex items-center relative">
                            <input  className="w-full py-4 px-2 rounded-md text-xl text-inputText focus:outline-none" placeholder="Ask Your Crypto Questions" type="text"/>
                            <button className="absolute right-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-inputText">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </div>
                        {/* Search Container ends */}

                        {/* Search AI Card Continer starts */}
                        <div className="w-full mt-6 lg:flex items-center justify-center">
                            {   
                                cards.map((card) => (
                                    <SearchAICard id={card.id} title={card.title} tags={card.tags}/>
                                ))

                            }   
                        </div>
                        
                        {/* Search AI Card Continer ends */}
                    </div>
                </div>
            </div>
        </div>
    )
};


export default SearchAIContext;