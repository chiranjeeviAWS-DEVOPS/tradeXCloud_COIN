import React, { useState } from "react";
import { useSelector } from "react-redux";


function SmartContractSecurity() {

    const data = useSelector((state) => state.tokenData.contractInfo);

    const {
        token_name,
        address,
        creator_address,
        honeypot_info,
        rug_pull_information,
        top_holders,
    } = data;

    // State to track the copied address and its message
    const [copiedAddress, setCopiedAddress] = useState("");

    // Function to handle the copy action
    const handleCopy = (address) => {
        navigator.clipboard.writeText(address);
        setCopiedAddress("Address copied!");

        // Clear the message after 2 seconds
        setTimeout(() => {
            setCopiedAddress("");
        }, 2000);
    };


    // State for managing dropdown visibility
    const [showMore, setShowMore] = useState(false);
    const holdersToShow = showMore ? top_holders : top_holders.slice(0, 5); // Show only first 5 by default

    return (
        <div className="bg-[#191C19] my-[1.5rem]">
            <div className="">
                <h1 className="capitalize text-[#E1E3DD]">smart contract security</h1>
            </div>
            <div className="bg-[#111411] p-[1.5rem] flex justify-between">
                <div className="">
                    <div className="inline-flex gap-1">
                        <img src="/stock/bitcoin.png" alt="" className="w-[1.5rem] h-[1.5rem]" />
                        <h1 className="capitalize text-[#E1E3DD]">
                            {token_name || "Unknown Token"}
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col items-center cursor-pointer" onClick={() => handleCopy(address)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_769_1896)">
                            <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" fill="#C7DBFF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_769_1896">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h1 className="text-[#C7DBFF]">Copy Address</h1>
                </div>
            </div>


            {/* token grid startes here */}
            <div className="grid grid-cols-2 gap-1">
                <div className="col-span-2 lg:col-span-1 p-[1.5rem]">
                    <div className="bg-[#164477] w-full p-[1.5rem] rounded-[0.5rem] flex justify-between items-center">
                        <div className="">
                            <h1 className="text-[#C7DBFF]">Token Creator Address</h1>
                        </div>
                        <div className="flex items-center gap-2" onClick={() => handleCopy(creator_address)}>
                            <button className="flex items-center gap-2" onClick={() => handleCopy(creator_address)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <g clipPath="url(#clip0_769_2376)">
                                        <path d="M16 1.5H4C2.9 1.5 2 2.4 2 3.5V17.5H4V3.5H16V1.5ZM19 5.5H8C6.9 5.5 6 6.4 6 7.5V21.5C6 22.6 6.9 23.5 8 23.5H19C20.1 23.5 21 22.6 21 21.5V7.5C21 6.4 20.1 5.5 19 5.5ZM19 21.5H8V7.5H19V21.5Z" fill="#C7DBFF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_769_2376">
                                            <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h1 className="text-[#C7DBFF]">Copy</h1>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 my-[1.5rem] gap-1">
                        <div className="col-span-2 lg:col-span-1 bg-[#2E4430] p-[1.5rem] flex items-center justify-center rounded-[0.5rem]">
                            <div className="w-fit text-center">
                                <h1 className="capitalize text-[#C0DABF]">
                                    {honeypot_info ? "Bad" : "Good"}
                                </h1>
                                <p className="text-[#A9E9AF]">Honeypot Info</p>
                            </div>
                        </div>

                        <div className="col-span-2 lg:col-span-1 bg-[#93000A] p-[1.5rem] flex items-center justify-center rounded-[0.5rem]">

                            <div className="w-fit text-center">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                                        <path d="M9.25556 40.5C8.57407 40.5 8.07037 40.2037 7.74444 39.6111C7.41852 39.0185 7.41852 38.4259 7.74444 37.8333L24.1889 9.38889C24.5148 8.7963 25.0333 8.5 25.7444 8.5C26.4556 8.5 26.9741 8.7963 27.3 9.38889L43.7444 37.8333C44.0704 38.4259 44.0704 39.0185 43.7444 39.6111C43.4185 40.2037 42.9148 40.5 42.2333 40.5H9.25556ZM25.7444 20.9444C25.2407 20.9444 24.8188 21.1145 24.4787 21.4547C24.1373 21.796 23.9667 22.2185 23.9667 22.7222V28.0556C23.9667 28.5593 24.1373 28.9812 24.4787 29.3213C24.8188 29.6627 25.2407 29.8333 25.7444 29.8333C26.2481 29.8333 26.6707 29.6627 27.012 29.3213C27.3521 28.9812 27.5222 28.5593 27.5222 28.0556V22.7222C27.5222 22.2185 27.3521 21.796 27.012 21.4547C26.6707 21.1145 26.2481 20.9444 25.7444 20.9444ZM25.7444 35.1667C26.2481 35.1667 26.6707 34.996 27.012 34.6547C27.3521 34.3145 27.5222 33.8926 27.5222 33.3889C27.5222 32.8852 27.3521 32.4633 27.012 32.1231C26.6707 31.7818 26.2481 31.6111 25.7444 31.6111C25.2407 31.6111 24.8188 31.7818 24.4787 32.1231C24.1373 32.4633 23.9667 32.8852 23.9667 33.3889C23.9667 33.8926 24.1373 34.3145 24.4787 34.6547C24.8188 34.996 25.2407 35.1667 25.7444 35.1667Z" fill="#FFB4AB" />
                                    </svg>
                                </div>
                                <h1 className="capitalize text-[#FFDAD6]">
                                    {rug_pull_information ? "Warning" : "Safe"}
                                </h1>
                                <p className="text-[#FFDAD6] break-words overflow-wrap break-word word-break break-all max-w-full">
                                    {rug_pull_information || "No Rug Pull Detected"}
                                </p>

                                <div className="inline-flex gap-1 my-[1.5rem]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <g clipPath="url(#clip0_769_2397)">
                                            <path d="M16.5 1.5H4.5C3.4 1.5 2.5 2.4 2.5 3.5V17.5H4.5V3.5H16.5V1.5ZM19.5 5.5H8.5C7.4 5.5 6.5 6.4 6.5 7.5V21.5C6.5 22.6 7.4 23.5 8.5 23.5H19.5C20.6 23.5 21.5 22.6 21.5 21.5V7.5C21.5 6.4 20.6 5.5 19.5 5.5ZM19.5 21.5H8.5V7.5H19.5V21.5Z" fill="#FFB4AB" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_769_2397">
                                                <rect width="24" height="24" fill="white" transform="translate(0.5 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className="text-[#FFB4AB] capitalize">Detected Address</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-1 bg-[#1D201C] p-[1.5rem] flex flex-col justify-between">
                    <div className="text-[#E1E3DD]">
                        <h1 className="capitalize">Top Holders</h1>
                    </div>

                    {holdersToShow && holdersToShow.length > 0 ? (
                        holdersToShow.map((holder, index) => (
                            <div
                                key={index}
                                className="bg-[#111411] px-[1.5rem] py-[0.5rem] flex flex-col md:flex-row items-start md:items-center justify-between rounded-[0.5rem] mt-[0.75rem]"
                            >
                                <div className="flex gap-1 items-center">
                                    <h1 className="text-[#E1E3DD]">{index + 1}st Token Holder</h1>
                                    <div
                                        className="bg-[#1D201C] w-fit text-[#E1E3DD] inline-flex items-center p-[0.5rem] cursor-pointer"
                                        onClick={() => handleCopy(holder.address)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <g clipPath="url(#clip0_769_2412)">
                                                <path
                                                    d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z"
                                                    fill="#E1E3DD"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_769_2412">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p className="text-[0.6875rem]">Copy Address</p>
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className="text-[#E1E3DD]">
                                        {(holder.balance / 1_000_000).toFixed(3)} Million
                                    </h1>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No top holders available</div>
                    )}

                    {top_holders && top_holders.length > 5 && (
                        <button
                            onClick={() => setShowMore((prev) => !prev)}
                            className="text-[#E1E3DD] bg-[#111411] px-[1.5rem] py-[0.5rem] flex items-center justify-center rounded-[0.5rem] mt-[0.75rem]"
                        >
                            {showMore ? "Show Less" : "Show More"}
                        </button>
                    )}

                </div>

            </div>
            {/* Copy Confirmation Message */}
            {copiedAddress && (
                <div className="text-center text-green-500">
                    {copiedAddress}
                </div>
            )}
        </div>
    )
};



export default SmartContractSecurity;