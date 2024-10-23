import React from "react";
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
function RadarChart(){
    // Define the data and options for the radar chart
    const data = {
        labels: ['Twitter', 'Profile', 'Telegram', 'News'],
        datasets: [
        {
            label: 'Dataset 1',
            data: [20, 10, 30, 25], // Your data points
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
        <div className="w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem]">
            <Radar data={data} options={options} />
        </div>
    )
};


export default RadarChart;