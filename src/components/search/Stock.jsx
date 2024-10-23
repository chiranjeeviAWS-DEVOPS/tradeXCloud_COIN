import React from "react";



function Stock(){




    return(
        <div className="my-4">
            <div className="bg-navbarBG rounded-md px-2 py-4 flex items-center">
                {/* Primary Container Starts */}
                <div className="w-[calc(60%)] flex items-center">
                    {/* Stock Logo Container Starts */}
                    <div className="flex items-center w-fit border-r-[calc(0.5px)] border-stockFontSub pr-12">
                        <img src="./search/btc.png" alt="stock icon"/>
                        <div className="ml-2">
                            <h1 className="font-semibold capitalize">bitcoin</h1>
                            <h1 className="uppercase stockFontSub">btc</h1>
                        </div>
                    </div>
                    {/* Stock Logo Container Ends */}

                    {/* Stock Price and Market Cap Container Starts */}
                    <div className="flex items-center w-full border-r-[calc(0.5px)] border-stockFontSub pr-2">
                        {/* Stock Price Container Starts */}
                        <div className="w-[calc(60%)]">
                            <h1 className="text-center text-xl mb-1 font-semibold">$64,224.50</h1>
                            <div className="w-full flex">
                                <ul className="inline-flex items-center mx-auto text-red-500">
                                    <li className="inline-flex items-center ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 rotate-90">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-1">0.68% (1hr)</span>

                                    </li>
                                    <li className="inline-flex items-center mx-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 rotate-90">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-1">0.68% (1hr)</span>

                                    </li>
                                    <li className="inline-flex items-center mx-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 rotate-90">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-1">0.68% (1hr)</span>

                                    </li>
                                    <li className="inline-flex items-center mx-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 rotate-90">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-1">0.68% (1hr)</span>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Stock Price Container Ends */}
                        <div className="bg-navbarBG w-[calc(40%)] text-center py-2">
                            <h1 className="text-xl font-semibold">$1,264,786,948,609</h1>
                            <p className="capitalize">market cap</p>
                        </div>
                    </div>
                    
                    {/* Stock Price and Market Cap Container Ends */}
                </div>
                {/* Primary Container Ends */}

                {/* Secondary Container Starts */}

                    <div className="w-[calc(40%)] flex items-center">
                        <div className="bg-navbarBG w-[calc(40%)] text-center py-2">
                            <h1 className="text-xl font-semibold">$1,264,786,948,609</h1>
                            <p className="capitalize">volume (24 hrs)</p>
                        </div>
                        <div className="bg-navbarBG flex flex-col items-center w-[calc(30%)] text-center py-2  border-l-[calc(0.5px)] border-stockFontSub">
                           <div className="w-24">
                                <img className="w-full"  src="./search/graph.png" alt="stock component graph" />
                           </div>
                           <h1 className="capitalize">last 7 days</h1>
                        </div>
                        <div className="bg-navbarBG w-[calc(30%)] text-start py-2 border-l-[calc(0.5px)] border-stockFontSub pl-5">
                            <h1 className="uppercase text-semibold">19,714,778 btc</h1>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "45%"}}></div>
                            </div>
                            <p className="capitalize">circulating supply</p>
                        </div>
                    </div>

                {/* Secondary Container Ends */}
            </div>
        </div>
    )
};



export default Stock;