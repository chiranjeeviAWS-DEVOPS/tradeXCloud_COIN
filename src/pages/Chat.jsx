import React,{useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Navbar from "../components/Navbar";
import Header from "../components/chat/Header";
import Prompt from "../components/chat/Prompt";
import Card from "../components/chat/Card";


function Chat(){

    //ui states
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [slidesPerView, setSlidePerView] = useState(2)



    useEffect(() =>{

        //to set slides per view as per the current screen width
        if(windowWidth <= 768){
            setSlidePerView(2);
        }else if(windowWidth <= 1080){
            setSlidePerView(3);
        }else{
            setSlidePerView(4);
        }

       

    },[windowWidth])


    return(
        <div className="bg-[#0E1516] h-[100vh] relative">
            <Navbar />  
            <div className="">
                <Header />
                <Prompt />
            </div>
            <div className="text-2xl text-white fixed bottom-0 w-full px-[1rem] lg:px-[3rem] lg:py-[1.5rem] ">
                {/* prompt card section */}
                <div className="flex justify-center mb-4">
                    <div className="w-[100%] lg:w-[60%]">

                    

                        <div className="">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={0}
                                slidesPerView={slidesPerView}
                                navigation
                                pagination={{ clickable: true }}
                                className=""
                            >
                                <SwiperSlide>
                                    <div className="">
                                        <Card />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="">
                                        <Card />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="">
                                        <Card />
                                    </div>  
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="">
                                        <Card />
                                    </div>  
                                </SwiperSlide>
                                
                                    
                            </Swiper>     
                        </div>
                    </div>
                    
                </div>
                {/* prompt input section */}
                <div className="w-full relative">
                    <div className="">
                        <input placeholder="Ask your crypto questions" type="text" className="bg-[#DDE4E5]  text-[1rem] text-[#3C494B] w-full rounded-[0.5rem] p-[1.5rem] focus:outline-none" />
                    </div>
                    <div className="absolute top-0 h-full w-fit inline-flex items-center right-0 px-[1.5rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className="cursor-pointer">
                            <path d="M16.7291 10.0833C17.0771 10.0833 17.3648 10.3419 17.4104 10.6774L17.4166 10.7708V11.2291C17.4166 14.4919 14.8912 17.1649 11.6883 17.3998L11.6874 19.4791C11.6874 19.8588 11.3796 20.1666 10.9999 20.1666C10.6519 20.1666 10.3642 19.9079 10.3187 19.5724L10.3124 19.4791V17.3999C7.18038 17.1706 4.69585 14.6098 4.58697 11.4457L4.58325 11.2291V10.7708C4.58325 10.3911 4.89106 10.0833 5.27075 10.0833C5.61881 10.0833 5.90645 10.3419 5.95197 10.6774L5.95825 10.7708V11.2291C5.95825 13.8205 8.0065 15.9335 10.5724 16.0376L10.7708 16.0416H11.2291C13.8205 16.0416 15.9335 13.9934 16.0376 11.4275L16.0416 11.2291V10.7708C16.0416 10.3911 16.3494 10.0833 16.7291 10.0833ZM10.9999 1.83325C13.0249 1.83325 14.6666 3.47487 14.6666 5.49992V10.9999C14.6666 13.0249 13.0249 14.6666 10.9999 14.6666C8.97487 14.6666 7.33325 13.0249 7.33325 10.9999V5.49992C7.33325 3.47487 8.97487 1.83325 10.9999 1.83325ZM10.9999 3.20825C9.73428 3.20825 8.70825 4.23427 8.70825 5.49992V10.9999C8.70825 12.2656 9.73428 13.2916 10.9999 13.2916C12.2656 13.2916 13.2916 12.2656 13.2916 10.9999V5.49992C13.2916 4.23427 12.2656 3.20825 10.9999 3.20825Z" fill="#111111"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-[1rem] cursor-pointer">
                            <g opacity="0.3">
                                <path d="M4.74506 9.99991L1.91589 2.72491C1.71922 2.21907 2.21256 1.73491 2.70089 1.90741L2.77839 1.93991L17.7784 9.43991C17.8751 9.48822 17.9577 9.56079 18.018 9.65055C18.0782 9.7403 18.1142 9.84416 18.1224 9.95198C18.1305 10.0598 18.1105 10.1679 18.0644 10.2657C18.0183 10.3635 17.9476 10.4476 17.8592 10.5099L17.7784 10.5582L2.77839 18.0582C2.29256 18.3007 1.76422 17.8541 1.89089 17.3516L1.91589 17.2724L4.74506 9.99991ZM3.66839 3.78324L5.84339 9.37491H11.3659C11.5169 9.37491 11.6628 9.42961 11.7767 9.52888C11.8905 9.62815 11.9645 9.76528 11.9851 9.91491L11.9909 9.99991C11.9909 10.1511 11.936 10.2971 11.8366 10.4109C11.7372 10.5248 11.5998 10.5987 11.4501 10.6191L11.3659 10.6249H5.84172L3.66756 16.2166L16.1017 9.99991L3.66839 3.78324Z" fill="#111111"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            
        </div>
    )
};



export default Chat;