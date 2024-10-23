import React,{useState, useEffect} from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


function Header(){

    


    return(
        <div className="">
            <div className="">
                <div className="flex items-center lg:justify-end">
                    <div className="mr-[0.325rem] border-r-[1px] border-[#3C494B] px-[0.75rem]">
                        <h1 className="capitalize text-[#FFFFFF] text-[1rem] md:text-[1.5rem] roboto-regular">Recommended</h1>
                    </div>

                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            className="block lg:hidden py-[1rem]"
                        >
                            <SwiperSlide>
                                <div className="bg-[#1A2122] p-[0.75rem] rounded-[0.75rem] w-fit mr-[1.5rem]">
                                    <h1 className="text-[#C0C9BD] roboto-regular text-[0.8rem] md:text-[1rem]">Trending Tweets <a href="/" className="text-[#D4F9FF] ml-2 roboto-medium text-[0.8rem] md:text-[0.875rem]"> Lets Chat</a></h1>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-[#1A2122] p-[0.75rem] rounded-[0.75rem] w-fit mr-[1.5rem]">
                                    <h1 className="text-[#C0C9BD] roboto-regular text-[0.8rem] md:text-[1rem]">Coin Trend <a href="/" className="text-[#D4F9FF] ml-2 roboto-medium text-[0.8rem] md:text-[0.875rem]"> Trending Tweets </a></h1>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-[#1A2122] p-[0.75rem] rounded-[0.75rem] w-fit">
                                    <h1 className="text-[#C0C9BD] roboto-regular text-[0.8rem] md:text-[1rem]">Sentiment <a href="/" className="text-[#D4F9FF] ml-2 roboto-medium text-[0.8rem] md:text-[0.875rem]"> Lets Chat</a></h1>
                                </div>
                            </SwiperSlide>
                                
                        </Swiper>     

                        <div className="hidden lg:flex p-[0.75rem]">
                            <div className="bg-[#1A2122] p-[0.75rem] rounded-[0.75rem] w-fit mr-[1.5rem]">
                                <h1 className="text-[#C0C9BD] roboto-regular text-[1rem]">Trending Tweets <a href="/" className="text-[#D4F9FF] ml-2 roboto-medium text-[0.875rem]"> Lets Chat</a></h1>
                            </div>
                            
                            <div className="bg-[#1A2122] p-[0.75rem] rounded-[0.75rem] w-fit mr-[1.5rem]">
                                <h1 className="text-[#C0C9BD] roboto-regular text-[1rem]">Coin Trend <a href="/" className="text-[#D4F9FF] ml-2 roboto-medium text-[0.875rem]"> Trending Tweets </a></h1>
                            </div>

                            <div className="bg-[#1A2122] p-[0.75rem] rounded-[0.75rem] w-fit">
                                <h1 className="text-[#C0C9BD] roboto-regular text-[1rem]">Sentiment <a href="/" className="text-[#D4F9FF] ml-2 roboto-medium text-[0.875rem]"> Lets Chat</a></h1>
                            </div>

                        </div>
                    
                </div>
            </div>
        </div>
    )
};


export default Header;