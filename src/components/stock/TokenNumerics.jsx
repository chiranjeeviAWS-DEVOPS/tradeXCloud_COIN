import React from "react";
import LineChart from "./charts/LineChart";
import DoughnetChart from "./charts/DoughnetChart";
import TriangleChart from "./charts/TriangleChart";
import { useSelector } from "react-redux";
import SpeedChart from "./charts/SpeedChart";

function TokenNumerics(){

    const data = useSelector((state) => state.tokenData.tokenomics);
    // console.log(useSelector((state)=>state.tokenData.tokenomics));

    return(
        <div className="w-full">
            <div className="1xl:grid 1xl:grid-cols-10 gap-1">
                <div className="col-span-3 px-[1rem]" >
                    {/* tokenomics master container */}
                    <div className="w-full h-full flex flex-col justify-between ">
                        <div className="">
                            <h1 className="capitalize text-[#E1E3DD] text-center inter-600">tokenomics</h1>
                            <hr className="border-[1px] border-[#414940] mt-[0.5rem]" />
                        </div>
                        <div className="grid grid-cols-10 ">
                            <div className="col-span-10 1xl:col-span-5 flex justify-center">
                                {/* <div className="">
                                    <ProgressChart progress={90} />
                                </div> */}
                                <SpeedChart />
                            </div>
                            <div className="col-span-10 1xl:col-span-5 flex flex-col items-center mt-[1rem]">
                                <DoughnetChart />
                                <div className="text-center">
                                    <h1 className="text-[#E1E3DD]">{data.totalSupply} BTC</h1>
                                    <p className="text-[#616E85]">Total supply</p>
                                </div>
                                
                            </div>

                        </div>

                        <div className="">
                            <div className="grid grid-cols-2 1xl:grid-cols-3 gap-1 mt-[1rem] bg-black">
                                <div className="col-span-1 bg-[#111411] text-center p-[0.75rem] flex flex-col justify-center">
                                    <h1 className="text-[#E1E3DD] inter-600 text-[0.857rem]"> $ {data.tokenPrice}</h1>
                                    <p className="text-[#616E85] capitalize inline-flex items-center inter-500 text-[0.75rem] mx-auto">
                                        Token Price
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                            <path d="M8.49998 15.1666C4.82665 15.1666 1.83331 12.1733 1.83331 8.49992C1.83331 4.82659 4.82665 1.83325 8.49998 1.83325C12.1733 1.83325 15.1666 4.82659 15.1666 8.49992C15.1666 12.1733 12.1733 15.1666 8.49998 15.1666ZM8.49998 3.16659C5.55998 3.16659 3.16665 5.55992 3.16665 8.49992C3.16665 11.4399 5.55998 13.8333 8.49998 13.8333C11.44 13.8333 13.8333 11.4399 13.8333 8.49992C13.8333 5.55992 11.44 3.16659 8.49998 3.16659Z" fill="#A6B0C3"/>
                                            <path d="M8.49996 6.07999C9.00809 6.07999 9.41996 5.66809 9.41996 5.15999C9.41996 4.65189 9.00809 4.23999 8.49996 4.23999C7.99189 4.23999 7.57996 4.65189 7.57996 5.15999C7.57996 5.66809 7.99189 6.07999 8.49996 6.07999Z" fill="#A6B0C3"/>
                                            <path d="M8.49998 12.5001C8.13331 12.5001 7.83331 12.2001 7.83331 11.8334V7.83343C7.83331 7.46676 8.13331 7.16675 8.49998 7.16675C8.86665 7.16675 9.16665 7.46676 9.16665 7.83343V11.8334C9.16665 12.2001 8.86665 12.5001 8.49998 12.5001Z" fill="#A6B0C3"/>
                                        </svg>
                                    </p>
                                </div>

                                <div className="col-span-1 bg-[#111411] text-center p-[0.75rem] flex flex-col justify-center">
                                    <h1 className="text-[#E1E3DD] inter-600 text-[0.875rem]">18</h1>
                                    <p className="text-[#616E85] capitalize inline-flex items-center mx-auto inter-500 text-[0.75rem]">
                                        decimal
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                            <path d="M8.49998 15.1666C4.82665 15.1666 1.83331 12.1733 1.83331 8.49992C1.83331 4.82659 4.82665 1.83325 8.49998 1.83325C12.1733 1.83325 15.1666 4.82659 15.1666 8.49992C15.1666 12.1733 12.1733 15.1666 8.49998 15.1666ZM8.49998 3.16659C5.55998 3.16659 3.16665 5.55992 3.16665 8.49992C3.16665 11.4399 5.55998 13.8333 8.49998 13.8333C11.44 13.8333 13.8333 11.4399 13.8333 8.49992C13.8333 5.55992 11.44 3.16659 8.49998 3.16659Z" fill="#A6B0C3"/>
                                            <path d="M8.49996 6.07999C9.00809 6.07999 9.41996 5.66809 9.41996 5.15999C9.41996 4.65189 9.00809 4.23999 8.49996 4.23999C7.99189 4.23999 7.57996 4.65189 7.57996 5.15999C7.57996 5.66809 7.99189 6.07999 8.49996 6.07999Z" fill="#A6B0C3"/>
                                            <path d="M8.49998 12.5001C8.13331 12.5001 7.83331 12.2001 7.83331 11.8334V7.83343C7.83331 7.46676 8.13331 7.16675 8.49998 7.16675C8.86665 7.16675 9.16665 7.46676 9.16665 7.83343V11.8334C9.16665 12.2001 8.86665 12.5001 8.49998 12.5001Z" fill="#A6B0C3"/>
                                        </svg>
                                    </p>
                                </div>

                                <div className="col-span-2 1xl:col-span-1 bg-[#111411] text-center p-[0.75rem] flex flex-col justify-center">
                                    <p className="inline-flex items-center text-[#EA3943] mx-auto inter-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                            <path d="M8.27593 3.66675H2.72403C2.33959 3.66675 2.14708 4.13509 2.4189 4.40899L5.19488 7.20609C5.36336 7.37586 5.63662 7.37586 5.8051 7.20609L8.58104 4.40899C8.85293 4.13509 8.66038 3.66675 8.27593 3.66675Z" fill="#EA3943"/>
                                        </svg>
                                        <span className="text-[0.6875rem]">1.39%</span>
                                    </p>
                                    <h1 className="text-[#E1E3DD] inter-600 text-[0.875rem]">$ {data.marketCap}</h1>
                                    <p className="text-[#616E85] capitalize inline-flex items-center mx-auto inter-500">
                                        <span className="text-[0.75rem]">Market Cap</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                            <path d="M8.49998 15.1666C4.82665 15.1666 1.83331 12.1733 1.83331 8.49992C1.83331 4.82659 4.82665 1.83325 8.49998 1.83325C12.1733 1.83325 15.1666 4.82659 15.1666 8.49992C15.1666 12.1733 12.1733 15.1666 8.49998 15.1666ZM8.49998 3.16659C5.55998 3.16659 3.16665 5.55992 3.16665 8.49992C3.16665 11.4399 5.55998 13.8333 8.49998 13.8333C11.44 13.8333 13.8333 11.4399 13.8333 8.49992C13.8333 5.55992 11.44 3.16659 8.49998 3.16659Z" fill="#A6B0C3"/>
                                            <path d="M8.49996 6.07999C9.00809 6.07999 9.41996 5.66809 9.41996 5.15999C9.41996 4.65189 9.00809 4.23999 8.49996 4.23999C7.99189 4.23999 7.57996 4.65189 7.57996 5.15999C7.57996 5.66809 7.99189 6.07999 8.49996 6.07999Z" fill="#A6B0C3"/>
                                            <path d="M8.49998 12.5001C8.13331 12.5001 7.83331 12.2001 7.83331 11.8334V7.83343C7.83331 7.46676 8.13331 7.16675 8.49998 7.16675C8.86665 7.16675 9.16665 7.46676 9.16665 7.83343V11.8334C9.16665 12.2001 8.86665 12.5001 8.49998 12.5001Z" fill="#A6B0C3"/>
                                        </svg>
                                    </p>
                                </div>
                                
                            </div>
                            <div className="w-full bg-[#111411] flex flex-col items-center my-[0.5rem] p-[0.75rem]">
                                <p className="inline-flex items-center text-[#EA3943] mx-auto inter-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                        <path d="M8.27593 3.66675H2.72403C2.33959 3.66675 2.14708 4.13509 2.4189 4.40899L5.19488 7.20609C5.36336 7.37586 5.63662 7.37586 5.8051 7.20609L8.58104 4.40899C8.85293 4.13509 8.66038 3.66675 8.27593 3.66675Z" fill="#EA3943"/>
                                    </svg>
                                    <span className="text-[0.6875rem]">1.39%</span>
                                </p>
                                <h1 className="text-[#E1E3DD] inter-600 text-[0.875rem]">$ {data.totalVolume}</h1>
                                <p className="text-[#616E85] capitalize inline-flex items-center mx-auto inter-500">
                                    <span className="text-[0.75rem]">Total Volume</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <path d="M8.49998 15.1666C4.82665 15.1666 1.83331 12.1733 1.83331 8.49992C1.83331 4.82659 4.82665 1.83325 8.49998 1.83325C12.1733 1.83325 15.1666 4.82659 15.1666 8.49992C15.1666 12.1733 12.1733 15.1666 8.49998 15.1666ZM8.49998 3.16659C5.55998 3.16659 3.16665 5.55992 3.16665 8.49992C3.16665 11.4399 5.55998 13.8333 8.49998 13.8333C11.44 13.8333 13.8333 11.4399 13.8333 8.49992C13.8333 5.55992 11.44 3.16659 8.49998 3.16659Z" fill="#A6B0C3"/>
                                        <path d="M8.49996 6.07999C9.00809 6.07999 9.41996 5.66809 9.41996 5.15999C9.41996 4.65189 9.00809 4.23999 8.49996 4.23999C7.99189 4.23999 7.57996 4.65189 7.57996 5.15999C7.57996 5.66809 7.99189 6.07999 8.49996 6.07999Z" fill="#A6B0C3"/>
                                        <path d="M8.49998 12.5001C8.13331 12.5001 7.83331 12.2001 7.83331 11.8334V7.83343C7.83331 7.46676 8.13331 7.16675 8.49998 7.16675C8.86665 7.16675 9.16665 7.46676 9.16665 7.83343V11.8334C9.16665 12.2001 8.86665 12.5001 8.49998 12.5001Z" fill="#A6B0C3"/>
                                    </svg>
                                </p>
                            </div>

                            

                            <div className="grid grid-cols-2 gap-[0.5rem]">
                                <div className="col-span-1 bg-[#2E4430] p-[0.75rem] flex flex-col items-center">
                                    <h1 className="text-[#C0DABF] text-[0.875rem] inter-400">$ {data.allTimeHigh}</h1>
                                    <p className="capitalize text-[#96D59D] text-[0.75rem] inline-flex items-center inter-500">
                                        all time high
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                            <path d="M8.24998 14.6666C4.57665 14.6666 1.58331 11.6733 1.58331 7.99992C1.58331 4.32659 4.57665 1.33325 8.24998 1.33325C11.9233 1.33325 14.9166 4.32659 14.9166 7.99992C14.9166 11.6733 11.9233 14.6666 8.24998 14.6666ZM8.24998 2.66659C5.30998 2.66659 2.91665 5.05992 2.91665 7.99992C2.91665 10.9399 5.30998 13.3333 8.24998 13.3333C11.19 13.3333 13.5833 10.9399 13.5833 7.99992C13.5833 5.05992 11.19 2.66659 8.24998 2.66659Z" fill="#96D59D"/>
                                            <path d="M8.24996 5.57999C8.75809 5.57999 9.16996 5.16809 9.16996 4.65999C9.16996 4.15189 8.75809 3.73999 8.24996 3.73999C7.74189 3.73999 7.32996 4.15189 7.32996 4.65999C7.32996 5.16809 7.74189 5.57999 8.24996 5.57999Z" fill="#96D59D"/>
                                            <path d="M8.24998 12.0001C7.88331 12.0001 7.58331 11.7001 7.58331 11.3334V7.33343C7.58331 6.96676 7.88331 6.66675 8.24998 6.66675C8.61665 6.66675 8.91665 6.96676 8.91665 7.33343V11.3334C8.91665 11.7001 8.61665 12.0001 8.24998 12.0001Z" fill="#96D59D"/>
                                        </svg>
                                    </p>
                                </div>
                                <div className="col-span-1 flex flex-col items-center p-[0.75rem] bg-[#93000A]">
                                    <h1 className="text-[#C0DABF] text-[0.875rem] inter-400">$ {data.allTimeLow}</h1>
                                    <p className="capitalize text-[#FFDAD6] text-[0.75rem] inline-flex items-center inter-500">
                                        All Time Low
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                            <path d="M8.75001 14.6666C5.07668 14.6666 2.08334 11.6733 2.08334 7.99992C2.08334 4.32659 5.07668 1.33325 8.75001 1.33325C12.4233 1.33325 15.4167 4.32659 15.4167 7.99992C15.4167 11.6733 12.4233 14.6666 8.75001 14.6666ZM8.75001 2.66659C5.81001 2.66659 3.41668 5.05992 3.41668 7.99992C3.41668 10.9399 5.81001 13.3333 8.75001 13.3333C11.69 13.3333 14.0833 10.9399 14.0833 7.99992C14.0833 5.05992 11.69 2.66659 8.75001 2.66659Z" fill="#FFB4AB"/>
                                            <path d="M8.74993 5.57999C9.25806 5.57999 9.66993 5.16809 9.66993 4.65999C9.66993 4.15189 9.25806 3.73999 8.74993 3.73999C8.24186 3.73999 7.82993 4.15189 7.82993 4.65999C7.82993 5.16809 8.24186 5.57999 8.74993 5.57999Z" fill="#FFB4AB"/>
                                            <path d="M8.75001 12.0001C8.38334 12.0001 8.08334 11.7001 8.08334 11.3334V7.33343C8.08334 6.96676 8.38334 6.66675 8.75001 6.66675C9.11668 6.66675 9.41668 6.96676 9.41668 7.33343V11.3334C9.41668 11.7001 9.11668 12.0001 8.75001 12.0001Z" fill="#FFB4AB"/>
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-span-4 bg-gradient-to-t from-[#0F4D23] to-black p-[0.5rem] md:p-[1.25rem] flex flex-col justify-between">
                    <div className="">
                        <h1 className="text-[#E1E3DD] text-[1.2rem] lg:text-[1.5rem] capitalize roboto-semimediu">overview</h1>
                    </div>
                    <div className="flex flex-col items-end">
                        <ul className="text-[#C0C9BD] inline-flex items-center">
                            <li className="mr-4">1D</li>
                            <li className="mr-4">5D</li>
                            <li className="mr-4">1M</li>
                            <li className="mr-4">6M</li>
                            <li className="mr-4">1Y</li>
                            
                        </ul>
                        <LineChart />

                        
                    </div>
                    
                   
                </div>
                <div className="hidden lg:block col-span-3 bg-[#111411] px-[1rem] py-[1.5rem]">
                    <div className="text-center text-[#E1E3DD]">
                        <h1 className="text-[1.75rem]">Overview</h1>
                        <p className="text-[1.35rem]">Sentimental Analysis</p>
                    </div>
                    <div className="flex justify-center">
                        <TriangleChart />
                    </div>
                    <div className="flex justify-center">
                        <ul className="text-[0.75rem] text-[#FFFFFFCC] inline-flex ">
                            <li className="mr-5">Bitcoin</li>
                            <li className="mr-5">Ethereum</li>
                            <li className="">Ripple</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default TokenNumerics;