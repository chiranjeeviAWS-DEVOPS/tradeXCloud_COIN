import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Introduction(){

    //fetching token introduction from redux

    const tokenIntroduction = useSelector((state) => state.tokenData.tokenIntroduction);
    const tokenWebsiteURL = useSelector((state) => state.tokenData.websiteURL);
    // console.log(tokenWebsiteURL);


    return(
        <div className="">
            <div className="flex py-[0.75rem]">
                {/* social media master container */}
                <Link to={tokenWebsiteURL} target="_blank">
                    <div  className="inline-flex items-center bg-[#414940] rounded-[0.5rem] w-fit p-[0.5rem] md:px-[1.5rem] md:py-[0.75rem] mr-[0.75rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99998 1.33337C4.32665 1.33337 1.33331 4.32671 1.33331 8.00004C1.33331 11.6734 4.32665 14.6667 7.99998 14.6667C11.6733 14.6667 14.6666 11.6734 14.6666 8.00004C14.6666 4.32671 11.6733 1.33337 7.99998 1.33337ZM13.2866 7.33337H10.96C10.8933 5.74671 10.5933 4.20671 10.0666 3.08671C11.7866 3.81337 13.0466 5.42004 13.2866 7.33337ZM7.99998 13.3334C7.47998 13.3334 6.49998 11.6934 6.37331 8.66671H9.62665C9.49998 11.6934 8.51998 13.3334 7.99998 13.3334ZM6.37331 7.33337C6.49998 4.30671 7.47998 2.66671 7.99998 2.66671C8.51998 2.66671 9.49998 4.30671 9.62665 7.33337H6.37331ZM5.93331 3.08671C5.40664 4.21337 5.10665 5.74671 5.03998 7.33337H2.71332C2.95332 5.41337 4.21331 3.81337 5.93331 3.08671ZM2.71332 8.66671H5.03998C5.10665 10.2534 5.40664 11.7934 5.93331 12.9134C4.21331 12.1867 2.95332 10.58 2.71332 8.66671ZM10.0666 12.9134C10.5933 11.7867 10.8933 10.2534 10.96 8.66671H13.2866C13.0466 10.5867 11.7866 12.1867 10.0666 12.9134Z" fill="#C0C9BD"/>
                        </svg>
                        <h1 className="hidden md:block text-[#C0C9BD] capitalize ml-[0.5rem] inter-500">website</h1>
                    </div>
                </Link>

                <div className="inline-flex items-center bg-[#414940] rounded-[0.5rem] w-fit p-[0.5rem] md:px-[1.5rem] md:py-[0.75rem] mr-[0.75rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.99998 1.33337C4.32665 1.33337 1.33331 4.32671 1.33331 8.00004C1.33331 11.6734 4.32665 14.6667 7.99998 14.6667C11.6733 14.6667 14.6666 11.6734 14.6666 8.00004C14.6666 4.32671 11.6733 1.33337 7.99998 1.33337ZM13.2866 7.33337H10.96C10.8933 5.74671 10.5933 4.20671 10.0666 3.08671C11.7866 3.81337 13.0466 5.42004 13.2866 7.33337ZM7.99998 13.3334C7.47998 13.3334 6.49998 11.6934 6.37331 8.66671H9.62665C9.49998 11.6934 8.51998 13.3334 7.99998 13.3334ZM6.37331 7.33337C6.49998 4.30671 7.47998 2.66671 7.99998 2.66671C8.51998 2.66671 9.49998 4.30671 9.62665 7.33337H6.37331ZM5.93331 3.08671C5.40664 4.21337 5.10665 5.74671 5.03998 7.33337H2.71332C2.95332 5.41337 4.21331 3.81337 5.93331 3.08671ZM2.71332 8.66671H5.03998C5.10665 10.2534 5.40664 11.7934 5.93331 12.9134C4.21331 12.1867 2.95332 10.58 2.71332 8.66671ZM10.0666 12.9134C10.5933 11.7867 10.8933 10.2534 10.96 8.66671H13.2866C13.0466 10.5867 11.7866 12.1867 10.0666 12.9134Z" fill="#C0C9BD"/>
                    </svg>
                    <h1 className="hidden md:block text-[#C0C9BD] capitalize ml-[0.5rem] inter-500"> <a target="_blank" href="#" className=""></a>telegram</h1>
                </div>

                <div className="inline-flex items-center bg-[#414940] rounded-[0.5rem] w-fit p-[0.5rem] md:px-[1.5rem] md:py-[0.75rem] mr-[0.75rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.99998 1.33337C4.32665 1.33337 1.33331 4.32671 1.33331 8.00004C1.33331 11.6734 4.32665 14.6667 7.99998 14.6667C11.6733 14.6667 14.6666 11.6734 14.6666 8.00004C14.6666 4.32671 11.6733 1.33337 7.99998 1.33337ZM13.2866 7.33337H10.96C10.8933 5.74671 10.5933 4.20671 10.0666 3.08671C11.7866 3.81337 13.0466 5.42004 13.2866 7.33337ZM7.99998 13.3334C7.47998 13.3334 6.49998 11.6934 6.37331 8.66671H9.62665C9.49998 11.6934 8.51998 13.3334 7.99998 13.3334ZM6.37331 7.33337C6.49998 4.30671 7.47998 2.66671 7.99998 2.66671C8.51998 2.66671 9.49998 4.30671 9.62665 7.33337H6.37331ZM5.93331 3.08671C5.40664 4.21337 5.10665 5.74671 5.03998 7.33337H2.71332C2.95332 5.41337 4.21331 3.81337 5.93331 3.08671ZM2.71332 8.66671H5.03998C5.10665 10.2534 5.40664 11.7934 5.93331 12.9134C4.21331 12.1867 2.95332 10.58 2.71332 8.66671ZM10.0666 12.9134C10.5933 11.7867 10.8933 10.2534 10.96 8.66671H13.2866C13.0466 10.5867 11.7866 12.1867 10.0666 12.9134Z" fill="#C0C9BD"/>
                    </svg>
                    <h1 className="hidden md:block text-[#C0C9BD] capitalize ml-[0.5rem] inter-500"><a target="_blank" href="#" className="">instagram</a></h1>
                </div>
            </div>

            <div className="">
                {/* introduction context container */}
                <div className="bg-black">
                    <div className="px-[1.5rem] py-[0.5rem]">
                        <h1 className="text-[#E1E3DD] capitalize text-[0.875rem] inter-600">Introduction</h1>
                        <p className="text-[#C0C9BD] text-[0.875rem] text-justify inter-500">
                            {tokenIntroduction}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full py-[0.75rem]">
                {/* crypto chatbot container */}
                <div className="w-full bg-[#96D59D] p-[1.5rem] rounded-[0.5rem] flex justify-between items-center">
                    <div className="">
                        {/* chatbot context container */}
                        <h1 className="text-[1rem] md:text-[1.25rem] text-[#145126] inter-600">Crypto Chatbot</h1>
                        <p className="text-[0.7rem] md:text-[0.875rem] text-[#145126] inter-400"><span className="inter-700">Intelligence chatbot</span> that guides you through the world of cryptocurrency</p>
                    </div>

                    <div className="">
                        {/* chatbot navigator icon */}
                        <Link to="/">
                            <div className="bg-[#145126] text-[#C7DBFF] w-fit p-[0.5rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default Introduction;