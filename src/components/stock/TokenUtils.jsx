import React from "react";
import { useSelector } from "react-redux";

function TokenUtils() {
    const utilityInfo = useSelector((state) => state.tokenData.utilityInfo);
    const isLocked = utilityInfo.tokensLockedPercentage > 0;

    return (
        <div className="bg-[#0C0F0B] p-[1.5rem] mt-[1rem]">
            <div className="">
                <div className="">
                    <h1 className="captalize text-[#E1E3DD] text-[1.375rem]">Tokens Utility</h1>
                </div>
                <div className="grid grid-cols-2 gap-1 mt-[1rem]">
                    <div className="col-span-2 lg:col-span-1">
                        {/* token utils left container */}
                        <div className="grid grid-cols-2 gap-[0.75rem]">
                            <div className="col-span-2 lg:col-span-1 bg-[#111411] rounded-[0.5rem] flex items-center justify-between text-[#E1E3DD] p-[1.5rem]">
                                <div className="w-[80%]">
                                    <h1 className="lg:text-[1.125rem]">{utilityInfo.tokensLocked}</h1>
                                    <p className="capitalize text-[0.75rem]">Tokens Locked</p>
                                </div>
                                <div className="w-[20%] text-[#E1E3DD] text-center border-l-[1px] border-[#E1E3DD]">
                                    <h1 className="text-[1.125rem]">{utilityInfo.scoreForTokenLocked}</h1>
                                    <p className="text-[0.75rem]">Score</p>
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1 bg-[#111411] rounded-[0.5rem] flex items-center justify-between text-[#E1E3DD] p-[1.5rem]">
                                <div className="w-[80%]">
                                    <h1 className="text-[1.125rem]">{utilityInfo.stakingRatio?.toFixed(3)}</h1>
                                    <p className="capitalize text-[0.75rem]">Staking ratio</p>
                                </div>
                                <div className="w-[20%] text-[#E1E3DD] text-center border-l-[1px] border-[#E1E3DD]">
                                    <h1 className="text-[1.125rem]">{utilityInfo.scoreForStakingRatio}</h1>
                                    <p className="text-[0.75rem]">Score</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-[0.75rem] mt-[0.5rem]">
                            <div className="col-span-2 lg:col-span-1 bg-[#111411] rounded-[0.5rem] flex items-center justify-between text-[#E1E3DD] p-[1.5rem]">
                                <div className="w-[80%]">
                                    <h1 className="text-[1.125rem]">{utilityInfo.AVGTradingVolume24?.toLocaleString()}</h1>
                                    <p className="capitalize text-[0.75rem]">Average Trading Volume</p>
                                </div>
                                <div className="w-[20%] text-[#E1E3DD] text-center border-l-[1px] border-[#E1E3DD]">
                                    <h1 className="text-[1.125rem]">{utilityInfo.tradingVolumeScore}</h1>
                                    <p className="text-[0.75rem]">Score</p>
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1 bg-[#111411] rounded-[0.5rem] flex items-center justify-between text-[#E1E3DD] p-[1.5rem]">
                                <div className="w-[80%]">
                                    <h1 className="text-[1.125rem]">{utilityInfo.tokensLockedPercentage}%</h1>
                                    <p className="capitalize text-[0.75rem]">{isLocked ? 'Tokens Locked Percentage' : 'Tokens yet to be released'}</p>
                                </div>
                                {/* <div className="w-[20%] text-[#E1E3DD] text-center border-l-[1px] border-[#E1E3DD]">
                                    <h1 className="">60.0</h1>
                                    <p className="">Score</p>
                                </div> */}
                            </div>
                        </div>

                        <div className="bg-[#191C19] p-[1.5rem] flex justify-between items-center mt-[0.5rem] rounded-[0.5rem]">
                            <div className="">
                                <div className="text-[#C0C9BD] flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.58599 32.5859C1.80499 33.3669 1.80499 34.6329 2.58599 35.4139L4.58599 37.4139C5.36699 38.1949 6.633 38.1949 7.414 37.4139L18 26.8279L24.586 33.4139C25.367 34.1949 26.633 34.1949 27.414 33.4139L38 22.8279L40.586 25.4139C41.116 25.9439 41.897 26.1329 42.61 25.9049C43.324 25.6759 43.85 25.0679 43.973 24.3289L45.973 12.3289C46.079 11.6919 45.871 11.0429 45.414 10.5859C44.957 10.1289 44.308 9.92092 43.671 10.0269L31.671 12.0269C30.932 12.1499 30.324 12.6759 30.095 13.3899C29.867 14.1029 30.056 14.8839 30.586 15.4139L33.172 17.9999L26 25.1719L19.414 18.5859C18.633 17.8049 17.367 17.8049 16.586 18.5859L2.58599 32.5859Z" fill="#E1E3DD" />
                                    </svg>
                                    <div className="ml-[0.75rem]">
                                        <h1 className="text-[1rem] md:text-[1.125rem]">{utilityInfo.tokenNature}</h1>
                                        <p className="text-[0.5rem] md:text-[0.75rem]">Nature of the token</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[#E1E3DD] text-center">
                                <h1 className="text-[1rem] md:text-[1.125rem]">{utilityInfo.scoreForNatureOfToken}</h1>
                                <p className="text-[0.5rem] md:text-[0.75rem]">Score</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        {/* token utils right container */}
                        <div className="w-full h-full bg-[#373A36] p-[1.5rem] rounded-[0.75rem]">
                            <div className="text-[#E1E3DD] border-b-[0.5px] pb-[1rem] border-[#414940]">
                                <h1 className="text-[1.125rem]">{utilityInfo.category}</h1>
                                <p className="text-[0.75rem]">Category</p>
                            </div>
                            <div>
                                <h1 className="text-[1rem] text-[#E1E3DD]">Top 5 competitors in {utilityInfo.category}</h1>
                                <ul>
                                    {utilityInfo.competitors.map((competitor, index) => (
                                        <li key={index} className="flex items-center gap-1 mt-[1rem]">
                                            <div>
                                                <span className="text-[#E1E3DD]">{index + 1}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <img src={`/stock/x.png`} alt="" className="w-[1.25rem] h-[1.25rem] rounded-full" />
                                                <div>
                                                    <h1 className="text-[#E1E3DD] text-[0.75rem]">{competitor}</h1>
                                                    <p className="uppercase text-[#E1E3DD] text-[0.6875rem]">{competitor.substring(0, 2).toUpperCase()}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default TokenUtils;