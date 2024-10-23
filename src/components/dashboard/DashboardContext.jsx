import React, { useEffect, useState, useRef } from "react";
import StockCard from "./StockCard";
import LineChart from "./LineChart";
import TriangleChart from "../stock/charts/TriangleChart";
import { useSentimentAnalysisQuery } from "../../Services/apiList";
import axios from "axios";
import debounce from 'lodash/debounce';
import { useNavigate } from 'react-router-dom';
import Loader from "../Loader";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';


function DashboardContext() {
    const navigate = useNavigate();
    const [tokenCards, setTokenCards] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isChartLoading, setIsChartLoading] = useState(true);
    const [firstTokenId, setFirstTokenId] = useState(null);
    const [fetchComplete, setFetchComplete] = useState(false);
    const [coinChart, setCoinChart] = useState([])
    const [selectedRange, setSelectedRange] = useState('1d');
    const [searchTerm, setSearchTerm] = useState('');
    const [coinChartData, setCoinChartData] = useState([]);

    const api_key = 'CG-jvSKkV4F5MGicsUo9Eou4yJj'

    //ui states
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [slidesPerView, setSlidePerView] = useState(1)



    useEffect(() =>{

        //to set slides per view as per the current screen width
        if(windowWidth <= 500){
            setSlidePerView(1);
        }else if(windowWidth <= 768){
            setSlidePerView(2);
        }else if(windowWidth <= 1024){
            setSlidePerView(3);
        }else if(windowWidth <= 1440){
            setSlidePerView(4)
        }else if(windowWidth >= 1440){
            setSlidePerView(6);
        };

       

    },[windowWidth])


    

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const cardContainerRef = useRef(null);

    const fetchStockCard = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}coins/markets`, {
                params: {
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    per_page: 10,
                    page: 1,
                    sparkline: false
                }
            });
            const limitedData = response.data.slice(0, 10);
            console.log("limitedData:", limitedData)
            setTokenCards(limitedData); // Set only the first 10 items to the state
            setFirstTokenId(limitedData[0]?.id);
            setIsLoading(false);
            setFetchComplete(true);

            // await new Promise(resolve => setTimeout(resolve, 30000));
        } catch (error) {
            console.error("Error fetching stock card data:", error);
            setIsLoading(false);
            setFetchComplete(false);
        }
    }



    useEffect(() => {
        fetchStockCard()
    }, [])

    const { data: analysisData, isLoading: analysisLoading, error: analysisError } = useSentimentAnalysisQuery(firstTokenId, {
        enabled: fetchComplete && !!firstTokenId,  // Only trigger the query if firstTokenId is truthy
    });

    const sentimentData = analysisData?.sentiment_data;
    const keyHeadlinesData = analysisData?.headlines;

    const handleClick = (e) => {
        e.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    // Fetch price data for each coin over the past 24 hours
    const fetchCoinChartData = async () => {
        const now = Math.floor(Date.now() / 1000); // Current time in seconds (UNIX)
        const from = now - 24 * 3600;

        const coinIds = tokenCards.map(coin => coin.id);
        console.log("coinIds:", coinIds)

        try {
            let results = [];
            for (let i = 0; i < coinIds.length; i++) {
                const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}coins/${coinIds[i]}/market_chart/range`, {
                    params: {
                        vs_currency: 'usd',
                        from: from,
                        to: now
                    }
                });
                // Filter the data for the last 24 hours
                const filteredPrices = response.data.prices.filter(
                    ([timestamp]) => timestamp / 1000 >= from && timestamp / 1000 <= now
                );

                // Push the filtered data into the results array
                results = [...results, {
                    coinId: coinIds[i],
                    prices: filteredPrices
                }];

                console.log(`Data for coin ${coinIds[i]}`, filteredPrices);

                // Optional: Delay between requests to avoid rate-limiting
                if (i < coinIds.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, 300)); // 30 second delay
                }
                // Update state once all data is collected
                setCoinChartData(results);
            }
            console.log("coinChartDataResults:", results)
        } catch (error) {
            console.error("Error fetching chart data:", error);
        }
    };

    console.log("coinChartData:", coinChartData)


    useEffect(() => {
        console.log("Fetch complete:", fetchComplete);
        console.log("Token cards:", tokenCards);
        if (fetchComplete && tokenCards.length) {
            fetchCoinChartData();
        }
    }, [fetchComplete]);

    useEffect(() => {
        console.log("coinChartData:", coinChartData);
    }, [coinChartData]);

    const calculateUnixTimeRange = (range) => {
        const now = Math.floor(Date.now() / 1000); // current time in seconds
        let from;

        switch (range) {
            case '1d':
                from = now - 24 * 3600; // 1 day ago
                break;
            case '5d':
                from = now - 5 * 24 * 3600; // 5 days ago
                break;
            case '1m':
                from = now - 30 * 24 * 3600; // 1 month ago (approx)
                break;
            case '6m':
                from = now - 6 * 30 * 24 * 3600; // 6 months ago (approx)
                break;
            case '1y':
                from = now - 365 * 24 * 3600; // 1 year ago
                break;
            case '5y':
                from = now - 5 * 365 * 24 * 3600; // 5 years ago
                break;
            case 'max':
                from = now - 10 * 365 * 24 * 3600; // 10 years ago (arbitrary for max)
                break;
            default:
                from = now - 24 * 3600; // default 1 day
        }

        return { from, to: now };
    };

    const fetchCoinChart = async (range) => {
        const { from, to } = calculateUnixTimeRange(range);

        setIsChartLoading(true);
        try {
            const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}coins/${firstTokenId}/market_chart/range`, {
                params: {
                    vs_currency: 'usd',
                    from: from,
                    to: to
                }
            });
            setCoinChart(response.data);
            setIsChartLoading(false);
        } catch (error) {
            console.error("Error fetching coin chart:", error);
            setIsChartLoading(false);
        }
    };

    useEffect(() => {
        if (fetchComplete && firstTokenId && selectedRange) {
            fetchCoinChart(selectedRange); // Pass the selected range to the function
        }
    }, [fetchComplete, firstTokenId, selectedRange]);

    const handleSearch = () => {
        if (searchTerm) {
            // Find the coin by id, symbol, or name
            const matchedCoin = tokenCards.find(
                (coin) =>
                    coin.id.toLowerCase() === searchTerm ||
                    coin.symbol.toLowerCase() === searchTerm ||
                    coin.name.toLowerCase() === searchTerm
            );

            if (matchedCoin) {
                // Navigate to the page using the id of the matched coin
                navigate(`/stock/${matchedCoin.id}`);
            } else {
                alert('Coin not found');
            }
        }
    };

    return (
        <div className="">
            {isLoading && <Loader />}
            <div className="h-[80vh] overflow-y-auto no-scrollbar">
                
                {/* stock cards master container */}
                <div className="py-[0.75rem] px-[1.5rem] bg-black rounded-[0.5rem]">
                    <div className="">
                        <h1 className="capitalize text-[#E1E3DD] text-[1.375rem]">major tokens</h1>
                    </div>
                    <div className="relative mt-[0.5rem]">

                  

                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={0}
                            slidesPerView={slidesPerView}
                            navigation
                            pagination={{ clickable: true }}
                            >
                                  {tokenCards?.map((cards, index) => {
                                return (
                            <SwiperSlide className="md:mr-4">
                                <StockCard cards={cards} chartData={coinChartData[index]} />
                            </SwiperSlide>
                            )
                        })}
                        

                            {/* <SwiperSlide className="md:mr-4">
                                <StockCard />
                            </SwiperSlide>

                            <SwiperSlide className="md:mr-4">
                                <StockCard />
                            </SwiperSlide>

                            <SwiperSlide className="md:mr-4">
                                <StockCard />
                            </SwiperSlide>

                            <SwiperSlide className="md:mr-4">
                                <StockCard />
                            </SwiperSlide>

                            <SwiperSlide className="md:mr-4">
                                <StockCard />
                            </SwiperSlide>

                            <SwiperSlide className="md:mr-4">
                                <StockCard />
                            </SwiperSlide>

                            <SwiperSlide className="md:mr-4">
                                <StockCard /> */}
                            {/* </SwiperSlide>

                            <SwiperSlide className="md:mr-4">
                                <StockCard />
                            </SwiperSlide>

                            <SwiperSlide className="md:mr-4">
                                <StockCard />
                            </SwiperSlide>

                            <SwiperSlide className="md:mr-4">
                                <StockCard />
                            </SwiperSlide> */}
                            
                        </Swiper>
                        
                    </div>

                </div>

                {/* stock search container */}
                <div className="mt-[2rem] py-[0.75rem] px-[1.5rem] bg-[#111411] rounded-[0.5rem]">

                    <div className="flex items-center">

                        <div className="w-full">
                            <input type="text" placeholder="Search for tokens and more" className="bg-[#111411] w-full text-[#C0C9BD] focus:outline-none p-[1.5rem]" 
                             value={searchTerm}
                             onChange={handleInputChange} />
                        </div>
                        <div className="cursor-pointer" onClick={handleSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#C0C9BD]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>

                    <div className="text-center mt-2 md:text-start">
                        <ul className="inline-flex items-center text-[#C0C9BD] ">
                            <li className="capitalize underline mr-4 text-[0.875rem] md:text-[1.2rem]">recent tokens</li>
                            <li className="capitalize underline text-[0.875rem] md:text-[1.2rem]">favorite tokens</li>
                        </ul>
                    </div>
                </div>

                {/* technicals and graph container */}
                <div className="w-full mt-5">
                    <div className="w-full grid grid-cols-10 h-fit gap-4">
                        <div className="grid col-span-10 lg:col-span-6 h-fit bg-black rounded-[0.5rem]">
                            <div className="flex flex-col-reverse lg:grid lg:grid-cols-6 h-fit ">
                                <div className="col-span-2 px-[1rem] py-[1.25rem] flex flex-col justify-between">
                                    <div className="">
                                        <div className="">
                                            <h1 className="text-[1.75rem] text-[#E1E3DD] roboto-semimedium">We've created a watchlist just for you.</h1>
                                        </div>

                                        <div className="flex justify-center my-[0.75rem]">
                                            <button className="text-[#003915] bg-[#96D59D] px-[1.25rem] py-[0.5rem] rounded-[1.25rem]">Start your watchlist</button>
                                        </div>
                                    </div>

                                    <StockCard cards={tokenCards[0]} active={true} chartData={coinChartData[0]}/>

                                    <div className="bg-[#111411] my-[0.75rem] flex items-center p-[0.75rem] rounded-[0.5rem]">
                                        <div className="">
                                            <h1 className="text-[#E1E3DD]">Predicted 1-Year Return</h1>
                                            <div className="">
                                                <h1 className="text-[#107C10] text-[1.5rem]">+33.65%</h1>
                                            </div>

                                        </div>
                                        <div className="">
                                            <img src="/images/home/prediction.svg" alt="" className="" />
                                        </div>
                                    </div>

                                </div>
                                <div className="lg:col-span-4 h-full flex items-center bg-gradient-to-t from-[#0F4D23] to-black ">

                                    <div className="w-full h-fit flex justify-center  py-[1rem] lg:p-[1.5rem] flex-col">
                                  
                                        {/* chart header container */}
                                        <div className="px-[1rem] flex flex-col items-start lg:flex-row lg:items-center justify-between mb-12">
                                        {isChartLoading && <Loader />}
                                            <h1 className="text-[#E1E3DD] text-[1.2rem] lg:text-[1.5rem] capitalize roboto-semimediu">overview</h1>

                                            <div className="">
                                                <ul className="text-[#E1E3DD] inline-flex">
                                                    {['1d', '5d', '1m', '6m', '1y', '5y', 'max'].map((range) => (
                                                        <li
                                                            key={range}
                                                            className={`cursor-pointer uppercase mr-4 ${selectedRange === range ? 'text-[#96D59D] font-bold underline' : 'text-gray-500'
                                                                }`}
                                                            // className={`cursor-pointer uppercase mr-4 ${selectedRange === range ? 'text-white-500' : ''}`}
                                                            onClick={() => setSelectedRange(range)}
                                                        >
                                                            {range}
                                                        </li>
                                                    ))}
                                                </ul>
                                                {/* <ul className="text-[#E1E3DD] inline-flex">
                                                    <li className="cursor-pointer uppercase mr-4">1d</li>
                                                    <li className="cursor-pointer uppercase mr-4">5d</li>
                                                    <li className="cursor-pointer uppercase mr-4">1m</li>
                                                    <li className="cursor-pointer uppercase mr-4">6m</li>
                                                    <li className="cursor-pointer uppercase mr-4">1y</li>
                                                    <li className="cursor-pointer uppercase mr-4">5y</li>
                                                    <li className="cursor-pointer uppercase mr-4">max</li>
                                                </ul> */}
                                            </div>

                                        </div>
                                        {/* line chart container */}
                                        <div className="h-fit w-full flex justify-center">
                                            <LineChart  coinChart={coinChart}/>
                                        </div>

                                    </div>


                                </div>
                            </div>

                        </div>
                        <div className="hidden  w-full lg:grid h-full lg:col-span-4 ">
                            <div className="w-full grid grid-cols-4 gap-2">
                                <div className="col-span-2 bg-black p-5 rounded-[0.5rem] flex justify-center">
                                    {/* <RadarChart /> */}
                                    {/* <TriangleChart sentimentData={sentimentData} /> */}
                                </div>
                                <div className="col-span-2 bg-black h-full p-5 rounded-[0.5rem]">
                                    <div className="">
                                        <h1 className="capitalize text-[#E1E3DD] text-[1rem]">key market news and headlines</h1>
                                    </div>
                                    <div className="w-full h-full relative">
                                    {/* {keyHeadlinesData?.map(([title, url], index) => {
                                        return (

                                        <div className="">
                                            <a  href={url}
                                                // target="_blank"
                                                onClick={handleClick}
                                                className="block w-full h-[30vh]"
                                                style={{ cursor: 'pointer' }}
                                            >
                                                
                                                <div className="relative w-full h-[40vh] bg-red-900">
                                                    <img src="/dashboard/newsImg.jpg" alt="" className="w-full h-full object-cover" />
                                                    <div className="absolute top-0 w-full h-full bg-gradient-to-t from-[white]"></div>
                                                    <h1 className="absolute bottom-0 text-[#151515] roboto-semibold p-5 text-[1.2rem]">
                                                    {title}
                                                    </h1>
                                                </div>
                                                
                                            </a>
                                        </div>
                                        )})} */}

                                        <div className="absolute bottom-2 w-full h-full flex justify-center items-end">
                                            <div className="w-fit bg-[#0F4D23] p-[0.63rem] rounded-[0.5rem] cursor-pointer rotate-90">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                    <path d="M10 5.5L17 12.5L10 19.5" stroke="#A9E9AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>


                                        
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default DashboardContext;