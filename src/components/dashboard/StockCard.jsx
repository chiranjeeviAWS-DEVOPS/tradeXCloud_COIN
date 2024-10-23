import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import dayjs from 'dayjs';



function StockCard({ cards, chartData, active }) {
  //  console.log("tokenCardstack:", chartData)
  
// Extract labels (timestamps) and data points from chartData
const labels = chartData?.prices?.map(([timestamp]) => dayjs(timestamp).format('HH:mm')) || [];
const prices = chartData?.prices?.map(([, price]) => price) || [];

const data = {
  labels,
  datasets: [
    {
      label: 'Price',
      data: prices,
      fill: false,
      borderColor: '#9CFDA0',
      tension: 0.1,
    },
  ],
};


  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  // Define options for the chart
  const options = {
    type: "line",
    data: data,
    responsive: true,

    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      }
    },
    scales: {
      x: {
        display: false, // Hide the x-axis
      },
      y: {
        display: false, // Hide the y-axis
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        borderWidth: 1.5,
      }
    }
  };


  return (
    <div className={`bg-[#2E4430] w-full ${active?"w-full":"lg:w-[16.125rem]"}  p-[0.75rem] rounded-[0.5rem] md:mr-[0.75rem]`}>
            {/* card upper section */}
            <div className="flex justify-between">
              <div className="flex items-center">
                <img src="./dashboard/eth.png" alt="" className="w-[1.56rem] h-[1.56rem]" />
                {/* <img src={cards?.image} alt="" className="w-[1.56rem] h-[1.56rem]" /> */}
                <div className="ml-[0.5rem]">
                  <h1 className="capitalize text-[#C0DABF] roboto-medium">{cards?.name}</h1>
                  <h1 className="uppercase text-[#C0DABF] roboto-semimedium">{cards?.symbol}</h1>

                  {/* <h1 className="capitalize text-[#C0DABF] roboto-medium">{cards?.name}</h1>
                  <h1 className="uppercase text-[#C0DABF] roboto-semimedium">{cards?.symbol}</h1> */}
                </div>
              </div>
              <div className="">
                <h1 className="capitalize text-[#C0DABF]">in 24H</h1>
                <h1 className="text-[#9CFDA0]">{cards?.price_change_percentage_24h > 0 ? `+${cards?.price_change_percentage_24h.toFixed(4)}` : cards?.price_change_percentage_24h.toFixed(4)}</h1>
                {/* <h1 className="text-[#9CFDA0]">
                {cards?.price_change_24h > 0 ? `+${cards?.price_change_24h.toFixed(4)}` : cards?.price_change_24h.toFixed(4)}
                </h1> */}
              </div>
            </div>

            {/* card lower section */}
            <div className="flex justify-between items-center mt-[0.5rem]">
              <div className="w-1/2">
                <h1 className="capitalize text-[#C0DABF] roboto-semibold">current value</h1>
                <h1 className="text-[#C0DABF] roboto-medium">${cards?.current_price}</h1>

                {/* <h1 className="text-[#C0DABF] roboto-medium">${cards?.current_price}</h1> */}
              </div>
              <div className="w-1/2">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="80" height="25" viewBox="0 0 80 25" fill="none">
                        <path d="M2.50438 6.59999H1L1 25L79 25V8.84021L76.7434 14.4402L75.8469 16.6802H74.7959L72.6938 14.4402L71.2224 16.6802L66.808 16.6804L64.4958 14.4403L63.2345 11.0797L61.3988 12.7602L59.744 14.4402L59.2272 17L58.1761 16.6802H56.8856L54.4786 8.84021L53.7264 11.0802L52.5229 8.84021L51.6203 12.7602L49.2133 6.04021L47.8594 8.84021H45.3019L42.594 3.24022L40.9392 6.04021L38.7599 4.36L36.1045 8.83999L34.3972 0.999999L33.1616 8.83999L24.9196 12.2L23.8666 9.95998H22.8135L20.4065 6.59999H17.9995L17.0969 9.95998L13.4863 3.23999L11.982 12.2L11.2298 8.83999H9.57496L8.07058 0.999999L6.5662 7.71999L5.81401 4.36H3.85832L2.50438 6.59999Z" fill="url(#paint0_linear_809_79)" fill-opacity="0.16"/>
                            <path d="M1 6.59999H2.50438L3.85832 4.36H5.81401L6.5662 7.71999L8.07058 0.999999L9.57496 8.83999H11.2298L11.982 12.2L13.4863 3.23999L17.0969 9.95998L17.9995 6.59999H20.4065L22.8135 9.95998H23.8666L24.9196 12.2L33.1616 8.83999L34.3972 0.999999L36.1045 8.83999L38.7599 4.36L40.9392 6.04021L42.594 3.24022L45.3019 8.8402H47.8594L49.2133 6.04021L51.6203 12.7602L52.5229 8.8402L53.7264 11.0802L54.4786 8.8402L56.8856 16.6802H58.1761L59.2272 17L59.744 14.4402L61.3988 12.7602L63.2345 11.0797L64.4958 14.4403L66.808 16.6804L71.2224 16.6802L72.6938 14.4402L74.7959 16.6802H75.8469L76.7434 14.4402L79 8.8402" stroke="#9CFDA0" stroke-linecap="round"/>
                        <defs>
                            <linearGradient id="paint0_linear_809_79" x1="40" y1="25" x2="40" y2="0.999999" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#9CFDA0" stop-opacity="0"/>
                                <stop offset="0.809892" stop-color="#9CFDA0"/>
                            </linearGradient>
                        </defs>
                    </svg> */}
                <Line data={data} options={options} />
              </div>
            </div>
    </div>
  )
};


export default StockCard;
