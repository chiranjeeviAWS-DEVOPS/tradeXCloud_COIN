import React,{useState ,useEffect} from "react";
import { useSelector } from "react-redux";


function Header(){
    //state to manage token price change data with loss and profit info

    const [tokenPriceChange, setTokenPriceChange] = useState([]);


    //fetching token price, coin name & coin symbol from redux

    const tokenName = useSelector((state) => state.tokenData.tokenName);
    const tokenSymbol = useSelector((state) => state.tokenData.tokenSymbol);
    const tokenPrice = useSelector((state) => state.tokenData.coinPrice);
    const tokenImg = useSelector((state) => state.tokenData.tokenImgURL);

    const tokenPriceChangeRate = useSelector((state) => state.tokenData.tokenPriceChangeRate);
    // console.log(tokenPriceChangeRate);

    useEffect(() => {
    
        
        let trend, val, array;

        if(tokenPriceChangeRate.oneDay){      
            // console.log(tokenPriceChangeRate);


            let tokenChangeOneDay = tokenPriceChangeRate.oneDay.toString().slice(0,1);
            let tokenChangeSevenDays = tokenPriceChangeRate.sevenDays.toString().slice(0,1);
            let tokenChangeThirtyDays =  tokenPriceChangeRate.thirtyDays.toString().slice(0,1);
            let tokenChangeOneYear = tokenPriceChangeRate.oneYear.toString().slice(0,1);
            
            


            for(let i = 0; i < 4; i++){
                switch(i){
                    case 0:
                        trend = (tokenChangeOneDay == "-"? "negative" : "positive");
                        val = {price: tokenPriceChangeRate.oneDay.toString() + " " + "(1hr)", trend: trend};
                        array = tokenPriceChange;
                        tokenPriceChange.push(val);
                        setTokenPriceChange(array);
                        break;
                    case 1:
                        trend = (tokenChangeSevenDays == "-"? "negative" : "positive");
                        val = {price: tokenPriceChangeRate.sevenDays.toString() + " " +"(7d)", trend: trend};
                        array = tokenPriceChange;
                        tokenPriceChange.push(val);
                        setTokenPriceChange(array);;
                        break;
                    case 2:
                        trend = (tokenChangeThirtyDays == "-"? "negative" : "positive");
                        val = {price: tokenPriceChangeRate.thirtyDays.toString() + " " + "(30d)", trend: trend};
                        array = tokenPriceChange;
                        tokenPriceChange.push(val);
                        setTokenPriceChange(array);
                        break;

                    case 3:
                        trend = (tokenChangeOneYear == "-"? "negative" : "positive");
                        val = {price: tokenPriceChangeRate.oneYear.toString() + " " + "(1y)", trend: trend};
                        array = tokenPriceChange;
                        tokenPriceChange.push(val);
                        setTokenPriceChange(array);
                        break;

                };
            };

            
        };

    },[tokenPriceChangeRate]);


    return(
        <div className="w-full ">
            <div className="flex justify-between">
                <div className="">
                    {/* coin price master container */}
                    <div className="flex">
                        {/* coin details container */}
                        <div className="inline-flex">
                            <img src={tokenImg} alt="" className="w-[24px] h-[24px]" />
                            <h1 className="capitalize text-[1.125rem] text-[#E1E3DD] mx-[0.25rem] inter-600">{tokenName}</h1>
                        </div>
                        <div className="">
                            <h1 className="uppercase text-[#616E85] text-[0.75rem] inter-400">{tokenSymbol}</h1>
                        </div>
                    </div>

                    <div className="">
                        {/* coin price container */}
                        <h1 className="text-[#E1E3DD] text-[2rem] md:text-[2.5rem] inter-700">$ <span className="">{tokenPrice?tokenPrice.toLocaleString(): ""}</span></h1>
                        <div className="">
                            <ul className="inter-600">
                                {
                                    tokenPriceChange.map((element, id) => (
                                        <li key={id} className={`${element.trend == "negative"? "text-[#FFB4AB]" :"text-[#96D59D]"} text-[0.5rem] md:text-[0.875rem] inline-flex items-center mr-[0.3rem] md:mr-[1.5rem]`}>
                                           
                                           {
                                            element.trend == "positive"?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                                    <path d="M10.533 9.83337H3.46698C2.9777 9.83337 2.73268 9.23731 3.07864 8.88871L6.6117 5.32876C6.82613 5.11269 7.17391 5.11269 7.38835 5.32876L10.9214 8.88871C11.2674 9.23731 11.0223 9.83337 10.533 9.83337Z" fill="#96D59D"/>
                                                </svg>

                                                :

                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                                    <path d="M10.533 5.16663H3.46698C2.9777 5.16663 2.73268 5.76269 3.07864 6.11129L6.6117 9.67124C6.82613 9.88731 7.17391 9.88731 7.38835 9.67124L10.9214 6.11129C11.2674 5.76269 11.0223 5.16663 10.533 5.16663Z" fill="#FFB4AB"/>
                                                </svg>
                                           }
                                            {element.price} 
                                        </li>
                                    ))
                                }


                               

                                {/* <li className="text-[#FFB4AB] text-[0.5rem] md:text-[0.875rem] inline-flex items-center mr-[0.3rem] md:mr-[1.5rem]">
                                    <img src="/stock/arrow-down.png" alt="" className="w-[0.875rem] h-[0.875rem]" />
                                    2.31% (24h)
                                </li>

                                <li className="text-[#FFB4AB] text-[0.5rem] md:text-[0.875rem] inline-flex items-center mr-[0.3rem] md:mr-[1.5rem]">
                                    <img src="/stock/arrow-down.png" alt="" className="w-[0.875rem] h-[0.875rem]" />
                                    4.36% (7d)
                                </li>

                                <li className="hidden md:inline-flex text-[#FFB4AB] md:text-[0.875rem] items-center mr-[1.5rem]">
                                    <img src="/stock/arrow-down.png" alt="" className="w-[0.875rem] h-[0.875rem]" />
                                    1.36% (1d)
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        {/* header icons container */}
                        <div className="flex">
                            <div className="w-fit bg-[#414940] rounded-[0.495rem] p-[0.2rem] md:p-[0.5rem] mr-[0.5rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="0.99875rem" height="0.99875rem" viewBox="0 0 17 16" fill="none">
                                    <path d="M4.88466 14.3873C4.57172 14.3873 4.25879 14.2874 3.9858 14.0877C3.43982 13.6882 3.22007 13.0157 3.42648 12.3765L4.29206 9.71314L2.02158 8.06853C1.4756 7.66903 1.25586 6.99654 1.46227 6.35735C1.66868 5.71815 2.24129 5.29867 2.92044 5.29867H5.72362L6.58919 2.63534C6.79563 1.98948 7.36824 1.57666 8.04739 1.57666C8.72654 1.57666 9.2925 1.98948 9.50557 2.63534L10.3712 5.29867H13.1743C13.8535 5.29867 14.4194 5.71148 14.6325 6.35735C14.8389 7.0032 14.6258 7.66903 14.0731 8.06853L11.8027 9.71314L12.6683 12.3765C12.8747 13.0157 12.6616 13.6882 12.109 14.0877C11.563 14.4872 10.8572 14.4872 10.3112 14.0877L8.04073 12.4431L5.77023 14.0877C5.49724 14.2874 5.18427 14.3873 4.87133 14.3873H4.88466ZM2.92711 6.62368C2.80726 6.62368 2.76066 6.69692 2.73403 6.7635C2.7074 6.83008 2.70739 6.91664 2.80726 6.98988L5.46393 8.9208C5.69697 9.08726 5.79684 9.39354 5.70362 9.66653L4.68491 12.7893C4.64496 12.9025 4.70488 12.9757 4.75815 13.0157C4.81142 13.0556 4.898 13.0823 4.99122 13.0157L7.64789 11.0848C7.88093 10.9116 8.20053 10.9116 8.43358 11.0848L11.0903 13.0157C11.1901 13.0823 11.27 13.0556 11.3232 13.0157C11.3765 12.9757 11.4298 12.9091 11.3965 12.7959L10.3778 9.66653C10.2913 9.39354 10.3844 9.09392 10.6174 8.9208L13.2742 6.98988C13.3741 6.91664 13.3674 6.83008 13.3474 6.7635C13.3275 6.69692 13.2808 6.62368 13.1543 6.62368H9.86505C9.57874 6.62368 9.31913 6.43725 9.23258 6.16426L8.21385 3.04149C8.1739 2.9283 8.08734 2.90167 8.02076 2.90167C7.95418 2.90167 7.86755 2.9283 7.8276 3.04149L6.80894 6.16426C6.72237 6.43725 6.46268 6.62368 6.17637 6.62368H2.88716H2.92711Z" fill="#C0C9BD"/>
                                </svg>

                            </div>
                            <div className="w-fit bg-[#414940] rounded-[0.495rem] p-[0.2rem] md:p-[0.5rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="0.99875rem" height="0.99875rem" viewBox="0 0 16 16" fill="none">
                                    <path d="M12.013 10.6452C11.4005 10.6452 10.8611 10.9249 10.4949 11.3577L5.88069 8.69433C5.96725 8.46795 6.02052 8.22825 6.02052 7.97523C6.02052 7.72222 5.96725 7.46254 5.87403 7.23616L10.4749 4.57948C10.8412 5.02559 11.3871 5.31189 12.0064 5.31189C13.105 5.31189 14.0039 4.41302 14.0039 3.31439C14.0039 2.21577 13.105 1.31689 12.0064 1.31689C10.9077 1.31689 10.0155 2.20911 10.0089 3.30774L4.95518 6.22409C4.67553 6.07094 4.35593 5.97773 4.01636 5.97773C2.91773 5.97773 2.01886 6.87661 2.01886 7.97523C2.01886 9.07386 2.91773 9.97273 4.01636 9.97273C4.36925 9.97273 4.69551 9.87286 4.98182 9.71306L10.0089 12.6161C10.0089 12.6161 10.0089 12.6294 10.0089 12.6361C10.0089 13.7347 10.9077 14.6336 12.0064 14.6336C13.105 14.6336 14.0039 13.7347 14.0039 12.6361C14.0039 11.5374 13.105 10.6386 12.0064 10.6386L12.013 10.6452ZM12.013 2.65522C12.3792 2.65522 12.6789 2.95484 12.6789 3.32105C12.6789 3.68726 12.3792 3.98689 12.013 3.98689C11.6468 3.98689 11.3472 3.68726 11.3472 3.32105C11.3472 2.95484 11.6468 2.65522 12.013 2.65522ZM4.02302 8.64773C3.65681 8.64773 3.35718 8.3481 3.35718 7.98189C3.35718 7.61568 3.65681 7.31606 4.02302 7.31606C4.38923 7.31606 4.68885 7.61568 4.68885 7.98189C4.68885 8.3481 4.38923 8.64773 4.02302 8.64773ZM12.013 13.3086C11.6468 13.3086 11.3472 13.0089 11.3472 12.6427C11.3472 12.2765 11.6468 11.9769 12.013 11.9769C12.3792 11.9769 12.6789 12.2765 12.6789 12.6427C12.6789 13.0089 12.3792 13.3086 12.013 13.3086Z" fill="#C0C9BD"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-[1px] border-[#414940]" />
        </div>
    )
};


export default Header;