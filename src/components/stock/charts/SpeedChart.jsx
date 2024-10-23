import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { useSelector } from "react-redux";

// Register necessary components
ChartJS.register(Tooltip, Legend, ArcElement)


function SpeedChart() {
  const overallTeamScore = useSelector((state) => state.tokenData.overallTeamScore);
  const usedScore = overallTeamScore?.overall_score || 0;
  const totalScore = 100;
  const availableScore = totalScore - usedScore;

  const data = {
    labels: ['Used', 'Available'],
    datasets: [
      {
        label: 'Usage',
        data: [usedScore, availableScore],
        backgroundColor: [
          'rgba(150, 213, 157, 1)',
          'rgba(15, 77, 35, 1)',
        ],
        borderColor: [
          'rgba(150, 213, 157, 1)',
          'rgba(15, 77, 35, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    rotation: 270, // Start from the top (180 degrees)
    circumference: 180, // Draw only half (180 degrees)
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`; // Customize tooltip label
          },
        },
      },
    },
    cutout: '70%'
  };


  return (
    <div className="relative h-[10rem] w-[10rem] bg-[#1D201C]">
      {/* <Radar data={data} options={options} /> */}
      <Doughnut data={data} options={options} />
      <div className="absolute w-full bottom-6 text-center text-[#C0C9BD]">
        <h1 className="capitalize">overall score</h1>
        <p className="">{usedScore.toFixed(2)}%</p>
      </div>
    </div>
  )
};


export default SpeedChart;