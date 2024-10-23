import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';


// Register necessary components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);



function LineChart(){
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                fill: false,
                backgroundColor: 'rgba(137, 121, 255, 1)',
                borderColor: 'rgba(137, 121, 255, 1)',
                data: [0, 10, 5, 2, 0, 30, 85],
                
            },
            {
                fill: false,
                backgroundColor: 'rgba(255, 146, 138, 1)',
                borderColor: 'rgba(255, 146, 138, 1)',
                data: [0, 10, 15, 2, 20, 30, 45],
            },
            {
                fill: false,
                backgroundColor: 'rgba(60, 195, 223, 1)',
                borderColor: 'rgba(60, 195, 223, 1)',
                data: [0, 10, 15, 2, 20, 20, 49],
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    color: 'rgba(192, 201, 189, 0.1)', // Change the grid color for x-axis
                    // borderDash: [5, 5],
                },
            },
            y: {
                grid: {
                    color: 'rgba(192, 201, 189, 0.1)', // Change the grid color for y-axis
                    // borderDash: [10, 10],
                },
            },
        },
        plugins: {
            legend: {
                display:false,
            },
            title: {
                display: false,
               
            },
        },
    };


    return(
        <div className="w-full">
            <Line options={options} data={data} />
            <div className="flex justify-center mt-[1rem]">
                <ul className="text-[#FFFFFFCC] inline-flex items-center">
                    <li className="capitalize mr-4">bitcoin</li>
                    <li className="capitalize mr-4">etherium</li>
                    <li className="capitalize mr-4">ripple</li>
                </ul>
            </div>
        </div>
    )
};



export default LineChart;