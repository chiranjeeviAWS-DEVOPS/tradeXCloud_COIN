// Loader.jsx
import React from 'react';

function Loader() {
    return (
        <div className="h-[100vh]">
            <div className="relative h-[60vh] md:h-[65vh] w-full">
                <img src="/loading/loaderBG.jpg" alt="" className="w-full h-full object-cover" />
                <div className="bg-[#0C0F0B] p-[1.5rem] w-[90%] lg:w-[30%] absolute bottom-[40%] left-[2%]">
                    <h1 className="text-[#DDE4E5] text-[1.375rem] roboto-regular">Did you know ?</h1>
                    <h1 className="text-[#DDE4E5] mt-[1rem] text-[1.375rem] roboto-bold">First Bitcoin Transaction</h1>
                    <p className="text-[#DDE4E5] mb-[1rem] text-[1rem] roboto-regular">The first commercial Bitcoin transaction was for two pizzas in 2010. A man in Florida paid 10,000 bitcoins for them, which would be worth over $190 million today</p>

                    <a href="#" className="text-[#96D59D] underline text-[1rem] roboto-regular">Readmore</a>
                </div>
            </div>
            <div className="h-[40vh] md:h-[35vh] w-full bg-[#0C0F0B] flex justify-center items-center ">
                <div className="w-fit">
                    <img src="/loading/loaderIcon.gif" alt="" className="w-[8.875rem] h-[8.875rem] mx-auto" />
                    <div className="text-center">
                        <h1 className="text-[#DDE4E5] text-[1.75rem] roboto-regular">Hold on tight! </h1>
                        <p className="text-[#DDE4E5] text-[1rem] mb-[1rem] roboto-regular">Your personalized profile is currently undergoing a makeover and will be back shortly, all freshened up just for you.</p>
                        <a href="#" className="capitalize text-[#DDE4E5] text-[1rem] roboto-regular">need help? <span className="underline text-[#D4F9FF] text-[0.875rem]">Contact us</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;