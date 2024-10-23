import React from "react";

import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);



function TriangleChart(){

    // Define the data and options for the radar chart
    const data = {
        labels: ['Netural', 'Bearish', 'Bullish',],
        datasets: [
        {
            label: 'Dataset 1',
            data: [20, 10, 30], // Your data points
            backgroundColor: 'rgba(137, 121, 255, 0.2)',
            borderColor: 'rgba(137, 121, 255, 1)',
            borderWidth: 1,
        },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Disable the legend
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0)', // Make tooltip background transparent
            titleColor: 'black', // Set title color if needed
            bodyColor: 'black', // Set body color if needed
            borderColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a border with some transparency
            borderWidth: 1, // Optional: Set border width
          },
        },
        scales: {
          r: {
            beginAtZero: true,
            ticks: {
              color: 'rgba(0, 0, 0, 1)', // Keep text color as is (black)
            },
            grid: {
              color: 'rgba(217, 217, 255, 0.25)', // Optional: Change grid line color
            },
          },
        },
    };

    return(
        <div className={`relative w-[25rem] h-[25rem] mt-5`}>
            <Radar data={data} options={options} className="mt-4" />
            <div className="absolute top-0 w-full">
              {/* netural icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className="mx-auto">
                <circle cx="7" cy="7" r="7" fill="white"/>
              </svg>
            </div>

            <div className="absolute bottom-24 left-2">
              {/* bear icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M16.9734 1.74654L13.5844 1.25435C13.5298 1.24464 13.4736 1.25127 13.4228 1.2734C13.372 1.29554 13.3288 1.3322 13.2988 1.37878C13.2687 1.42535 13.2531 1.47977 13.2539 1.53519C13.2547 1.59062 13.2718 1.64457 13.3031 1.69029L13.8094 2.44123L7.08751 5.6981L3.57469 2.18248C3.53292 2.14027 3.47886 2.11236 3.42025 2.10276C3.36164 2.09316 3.3015 2.10236 3.24844 2.12904L0.998444 3.25404C0.951634 3.27763 0.912347 3.31382 0.885014 3.35855C0.857682 3.40328 0.843392 3.45475 0.843757 3.50716V5.71216C0.843902 5.76011 0.8563 5.80722 0.879775 5.84902C0.903249 5.89082 0.93702 5.92593 0.97788 5.95101C1.01874 5.97609 1.06533 5.99031 1.11323 5.99232C1.16114 5.99432 1.20875 5.98405 1.25157 5.96248L3.29063 4.9331L6.52219 8.35591C6.56351 8.39967 6.61777 8.42902 6.677 8.43965C6.73623 8.45028 6.79731 8.44163 6.85126 8.41498L15.0834 4.31435L15.8934 5.50966C15.9239 5.5548 15.9668 5.59012 16.0169 5.61136C16.067 5.63259 16.1222 5.63883 16.1758 5.6293C16.2294 5.61977 16.2791 5.59489 16.3189 5.55768C16.3586 5.52047 16.3867 5.47252 16.3997 5.41966L17.2069 2.09248C17.2163 2.0543 17.2176 2.01456 17.2108 1.97584C17.2039 1.93712 17.189 1.90027 17.167 1.86767C17.145 1.83507 17.1164 1.80745 17.0831 1.78658C17.0497 1.76572 17.0124 1.75208 16.9734 1.74654Z" fill="#E1E3DD"/>
                <path d="M15.3872 8.88185C15.2072 8.64278 15.0384 8.42903 14.8781 8.2406C14.9491 8.17963 15.0167 8.11484 15.0806 8.04653C15.3582 7.67976 15.4958 7.22601 15.4688 6.76685H14.9062C14.9343 7.08598 14.8486 7.40475 14.6644 7.66685C14.6141 7.72525 14.5585 7.77891 14.4984 7.82716C14.328 7.63162 14.101 7.494 13.8488 7.43341C13.3284 7.37435 13.005 7.86091 12.8559 7.95653C12.0938 7.94247 10.2656 8.48528 8.56969 9.0281H8.53594C7.56 9.34028 6.22969 9.07591 5.23969 9.0281C4.38308 8.98376 3.54315 9.27653 2.89969 9.84372C2.34844 10.2825 1.6875 11.3118 1.6875 13.7812H2.25C2.23915 13.1197 2.30426 12.4591 2.44406 11.8125C2.52154 12.3428 2.63907 12.8665 2.79562 13.379C2.77875 13.4662 2.60719 13.9415 2.45531 14.3493C2.44424 14.382 2.43854 14.4162 2.43844 14.4506L2.45812 16.875C2.45812 16.9496 2.48776 17.0211 2.5405 17.0738C2.59325 17.1266 2.66478 17.1562 2.73937 17.1562H3.86437C3.9057 17.1568 3.94665 17.1483 3.98431 17.1313C4.02197 17.1143 4.05542 17.0892 4.08227 17.0577C4.10913 17.0263 4.12872 16.9894 4.13967 16.9495C4.15062 16.9097 4.15266 16.8679 4.14562 16.8272C4.03817 16.2501 3.96864 15.6667 3.9375 15.0806C3.95719 14.7993 4.68844 13.8206 5.01187 13.3172C5.47909 13.6301 5.99663 13.8603 6.54187 13.9978C7.27031 14.1637 8.67938 14.0878 9.41906 14.0287C9.46406 14.4028 9.50625 14.7009 9.52875 14.9343C9.61759 15.6189 9.7615 16.2951 9.95906 16.9565C9.97712 17.0163 10.0146 17.0684 10.0655 17.1046C10.1164 17.1407 10.1779 17.1589 10.2403 17.1562H11.4019C11.4539 17.1564 11.5049 17.1421 11.5493 17.115C11.5936 17.0879 11.6296 17.049 11.6532 17.0026C11.6768 16.9563 11.6871 16.9043 11.683 16.8525C11.6788 16.8007 11.6604 16.751 11.6297 16.709C11.4438 16.4728 11.294 16.2102 11.1853 15.93C11.1853 15.6487 11.0475 14.4365 11.1234 13.8656C11.1395 13.7514 11.1639 13.6386 11.1966 13.5281C12.2147 12.7293 12.9937 12.0318 13.6181 10.9125C14.2116 11.1262 14.3972 10.994 14.8359 10.665C15.0722 10.7772 15.3284 10.8413 15.5897 10.8534C15.6684 10.8365 15.7725 10.8112 16.2478 10.2347C16.2914 10.1837 16.3153 10.1189 16.3153 10.0518C16.3153 9.98481 16.2914 9.91998 16.2478 9.86903C15.9423 9.55672 15.6549 9.22711 15.3872 8.88185Z" fill="#E1E3DD"/>
              </svg>
            </div>

            <div className="absolute bottom-24 right-2">
              {/* bull icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M17.2069 7.31252L16.3997 3.99377C16.3867 3.94091 16.3586 3.89296 16.3188 3.85575C16.2791 3.81854 16.2294 3.79366 16.1758 3.78413C16.1222 3.77461 16.067 3.78084 16.0169 3.80207C15.9668 3.82331 15.9239 3.85863 15.8934 3.90377L15.0834 5.09908L6.85125 0.998454C6.7973 0.9718 6.73622 0.963153 6.67699 0.973784C6.61776 0.984415 6.5635 1.01376 6.52219 1.05752L3.29062 4.48033L1.25156 3.45095C1.20875 3.42938 1.16113 3.41911 1.11323 3.42111C1.06533 3.42312 1.01873 3.43734 0.977873 3.46242C0.937013 3.4875 0.903242 3.52261 0.879768 3.56441C0.856293 3.60621 0.843895 3.65332 0.84375 3.70127V5.90627C0.843907 5.9582 0.858444 6.00908 0.885747 6.05327C0.913051 6.09745 0.952055 6.13321 0.998437 6.15658L3.24844 7.28158C3.30121 7.30861 3.36118 7.31827 3.41977 7.30917C3.47837 7.30008 3.53259 7.2727 3.57469 7.23095L7.0875 3.71533L13.8178 6.9722L13.3116 7.72314C13.2802 7.76886 13.2631 7.82281 13.2623 7.87824C13.2615 7.93366 13.2771 7.98808 13.3072 8.03465C13.3372 8.08123 13.3804 8.11789 13.4312 8.14003C13.482 8.16216 13.5382 8.16879 13.5928 8.15908L16.9819 7.66689C17.021 7.66047 17.0583 7.64586 17.0914 7.62401C17.1244 7.60216 17.1525 7.57357 17.1738 7.54011C17.195 7.50665 17.2089 7.46907 17.2146 7.42985C17.2204 7.39063 17.2177 7.35064 17.2069 7.31252Z" fill="#E1E3DD"/>
                <path d="M15.84 12.2034C15.84 12.0009 15.9356 11.5087 15.7022 11.1234C15.4209 10.6706 14.5772 10.4118 14.0794 10.2093C13.5 9.96466 12.2906 8.56966 11.565 8.43747C10.3416 8.22091 9.7425 8.61185 9.01688 8.54435C8.29125 8.47685 8.25188 8.33341 7.39407 8.19278C6.23529 8.07581 5.0668 8.28322 4.01907 8.79185C3.18657 9.25591 1.96875 10.4062 1.88438 11.2247C1.86502 11.3172 1.86931 11.4131 1.89684 11.5036C1.92437 11.594 1.97425 11.6761 2.04188 11.7422C2.14481 11.8071 2.26259 11.8448 2.38413 11.8517C2.50566 11.8586 2.62695 11.8345 2.73657 11.7815C2.67494 12.3867 2.70051 12.9977 2.8125 13.5956C3.06 15.404 2.87719 15.1818 2.62407 16.5431C2.61657 16.584 2.61825 16.6261 2.62899 16.6663C2.63972 16.7065 2.65925 16.7438 2.68615 16.7756C2.71306 16.8073 2.74667 16.8327 2.78457 16.8499C2.82247 16.8671 2.86371 16.8757 2.90532 16.875H6.11719C6.15908 16.8757 6.20062 16.8671 6.23876 16.8498C6.2769 16.8324 6.31069 16.8068 6.33764 16.7747C6.3646 16.7426 6.38405 16.7049 6.39457 16.6644C6.40509 16.6238 6.40641 16.5814 6.39844 16.5403C6.31969 16.1325 6.26625 15.8625 5.87813 15.6234C5.49 15.3843 5.44782 15.5475 5.45344 15.12C5.48129 14.8534 5.54662 14.5921 5.6475 14.3437C6.72944 14.7118 7.90917 14.6678 8.96063 14.22C9.24431 15.1287 9.67674 15.984 10.2403 16.7512C10.2662 16.7867 10.3001 16.8156 10.3391 16.8356C10.3782 16.8556 10.4214 16.8662 10.4653 16.8665H12.1978C12.2386 16.867 12.279 16.8586 12.3162 16.8419C12.3534 16.8252 12.3865 16.8006 12.4132 16.7699C12.44 16.7391 12.4597 16.7029 12.4711 16.6637C12.4825 16.6246 12.4852 16.5834 12.4791 16.5431C12.3694 15.8343 11.6606 15.5728 11.5088 15.0581C11.3569 14.5434 11.5088 13.964 11.6634 13.3706C12.02 13.2125 12.3899 13.0864 12.7688 12.9937C13.2019 12.9937 15.4266 14.0681 15.7331 14.0765C16.0144 14.0765 16.2731 13.7953 16.515 13.2103C16.5332 13.1657 16.5396 13.1172 16.5337 13.0695C16.5278 13.0217 16.5098 12.9763 16.4813 12.9375C16.2197 12.6562 15.9159 12.3103 15.84 12.2034Z" fill="#E1E3DD"/>
              </svg>
            </div>
        </div>
    )
};



export default TriangleChart;