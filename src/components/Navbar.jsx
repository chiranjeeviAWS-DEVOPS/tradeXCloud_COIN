import React,{ useState } from "react";




function Navbar(){


    const [navbar, setNavbar] = useState(false);

    return(
        <>
            <div className="bg-black w-full px-[2rem] py-[1.5rem]">
                <div className="w-full flex justify-between items-center text-[#C0C9BD]">
                    {/* navbar left container */}
                    <div className="hidden lg:flex items-center">
                        <h1 className="text-white text-[1.5rem]">TradeXCloud</h1>
                        
                    </div>
                    {/* navbar toggler container */}
                    <div onClick={() => setNavbar({navbar})} className="block lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 text-[#C0C9BD]">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>

                    </div>

                    {/* navbar right container */}
                    <div className="flex items-center">
                        <div className="">
                            <img src="/icons/notifications.svg" alt="" className="" />
                        </div>
                        {/* <div className="">
                            <h1 className="inline-flex items-center roboto-medium text-[1rem]">
                                Hi! John Doe
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_718_1546)">
                                        <path d="M7.41 8.59003L12 13.17L16.59 8.59003L18 10L12 16L6 10L7.41 8.59003Z" fill="#E1E3DD"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_718_1546">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </h1>
                        </div> */}
                        <div className="">
                            <img src="/icons/profile.svg" alt="" className="w-[20] h-[20]" />
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className={(navbar?"block absolute bg-black w-full h-[60vh] z-10" : "hidden absolute bg-black w-full h-[0vh] z-10")}>
                <div className="text-white p-5 w-full">
                    <ul className="roboto-medium text-[1.2rem]">
                        {/* <li className="capitalize mr-[2rem] mb-4"><a href="/" className="">portfolio</a></li> */}
                        {/* <li className="capitalize mr-[2rem] mb-4">
                            <a href="/" className="inline-flex items-center">
                                news & sentiment
                                <img src="/icons/arrow-down.svg" alt="" className="mt-[2px] ml-2" />
                            </a>
                        </li>
                        <li className="capitalize mr-[2rem] mb-4">
                            <a href="/" className="inline-flex items-center">
                                stock & analysis
                                <img src="/icons/arrow-down.svg" alt="" className="mt-[2px] ml-2" />
                            </a>
                        </li>
                        <li className="capitalize mr-[2rem] mb-4">
                            <a href="/" className="inline-flex items-center">
                                help & support
                                <img src="/icons/arrow-down.svg" alt="" className="mt-[2px] ml-2" />
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    )
};



export default Navbar;