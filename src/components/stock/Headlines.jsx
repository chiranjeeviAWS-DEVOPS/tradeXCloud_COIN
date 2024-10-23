import React from "react";
import { useSelector } from "react-redux";



function Headlines(){

    const data = useSelector((state) => state.tokenData.sentimentAnalysis.headlines);
    // console.log(data);


    return(
        <div className="bg-[#191C19] p-[1.5rem]">
            <div className="text-[#E1E3DD] flex items-center justify-between">
                <div className="">
                    <h1 className="capitalize">Top 5 Headlines</h1>
                </div>
                <div className="text-[#FFDAD6] text-end">
                    <h1 className="">90.0</h1>
                    <p className="">Score</p>
                </div>
            </div>
            <div className="py-[0.5rem]">
                {/* headlines master container */}

                {/* headlines section one */}
                <div className="grid grid-cols-3 gap-1 mb-[0.75rem]">
                    <div className="col-span-3 lg:col-span-1 bg-[#414940] p-[1.5rem] flex items-center justify-between rounded-[0.5rem]">
                        <div className="">
                            <h1 className="capitalize text-[#E1E3DD]">{data.length != 0?data[0][0] : ""}</h1>
                            <p className="text-[#E1E3DD]">Google</p>
                        </div>
                        <div className="bg-[#96D59D] p-[0.5rem] w-fit">
                            <a target="_blank" href={data.length != 0?data[0][1] : ""} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M1 0V2H9.59L0 11.59L1.41 13L11 3.41V12H13V0H1Z" fill="#003915"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-3 lg:col-span-1 bg-[#414940] p-[1.5rem] flex items-center justify-between rounded-[0.5rem]">
                        <div className="">
                            <h1 className="capitalize text-[#E1E3DD]">{data.length != 0?data[1][0] : ""}</h1>
                            <p className="text-[#E1E3DD]">Google</p>
                        </div>
                        <div className="bg-[#96D59D] p-[0.5rem] w-fit">
                            <a target="_blank" href={data.length != 0?data[1][1] : ""} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M1 0V2H9.59L0 11.59L1.41 13L11 3.41V12H13V0H1Z" fill="#003915"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-3 lg:col-span-1 bg-[#414940] p-[1.5rem] flex items-center justify-between rounded-[0.5rem]">
                        <div className="">
                            <h1 className="capitalize text-[#E1E3DD]">{data.length != 0?data[2][0] : ""}</h1>
                            <p className="text-[#E1E3DD]">Google</p>
                        </div>
                        <div className="bg-[#96D59D] p-[0.5rem] w-fit">
                            <a target="_blank" href={data.length != 0?data[2][1] : ""} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M1 0V2H9.59L0 11.59L1.41 13L11 3.41V12H13V0H1Z" fill="#003915"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                </div>
                {/* headlines section two */}
                <div className="grid grid-cols-2 gap-1">
                    <div className="col-span-2 lg:col-span-1 bg-[#414940] p-[1.5rem] flex items-center justify-between rounded-[0.5rem]">
                        <div className="">
                            <h1 className="capitalize text-[#E1E3DD]">{data.length != 0?data[3][0] : ""}</h1>
                            <p className="text-[#E1E3DD]">Google</p>
                        </div>
                        <div className="bg-[#96D59D] p-[0.5rem] w-fit">
                            <a target="_blank" href={data.length != 0?data[3][1] : ""} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M1 0V2H9.59L0 11.59L1.41 13L11 3.41V12H13V0H1Z" fill="#003915"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 bg-[#414940] p-[1.5rem] flex items-center justify-between rounded-[0.5rem]">
                        <div className="">
                            <h1 className="capitalize text-[#E1E3DD]">{data.length != 0?data[4][0] : ""}</h1>
                            <p className="text-[#E1E3DD]">Google</p>
                        </div>
                        <div className="bg-[#96D59D] p-[0.5rem] w-fit">
                            <a target="_blank" href={data.length != 0?data[4][1] : ""} className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M1 0V2H9.59L0 11.59L1.41 13L11 3.41V12H13V0H1Z" fill="#003915"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default Headlines;