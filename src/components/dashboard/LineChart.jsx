import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);


function LineChart({ coinChart }) {

  const chartData = coinChart?.prices?.map(([timestamp, price]) => ({
    x: new Date(timestamp), // Convert the timestamp to Date object
    y: price
  }));

  // Find the min and max prices for dynamic Y-axis range
  const pricesArray = coinChart?.prices?.map(([timestamp, price]) => price) || [];
  const minPrice = Math.min(...pricesArray);
  const maxPrice = Math.max(...pricesArray);

  // // Find the indexes of the min and max prices
  // const minIndex = pricesArray.indexOf(minPrice);
  // const maxIndex = pricesArray.indexOf(maxPrice);


  // Round the min and max prices and add a buffer for better visualization
  const yMin = Math.floor(minPrice - (minPrice * 0.02)); // Round down and add 2% below
  const yMax = Math.ceil(maxPrice + (maxPrice * 0.02));  // Round up and add 2% above

  // Data for the chart
  const data = {
    datasets: [
      {
        label: 'Price',
        data: chartData, // Use the transformed data
        fill: false,
        borderColor: '#9CFDA0',
        tension: 0.1,

        // // Add point styling, highlighting min and max points
        // pointRadius: chartData?.map((_, index) => {
        //   if (index === minIndex || index === maxIndex) return 6; // Highlight these points with a larger radius
        //   return 0; // No point for other data points
        // }),
        // pointBackgroundColor: chartData?.map((_, index) => {
        //   if (index === minIndex) return 'transparent'; // Highlight min with red
        //   if (index === maxIndex) return '#00FF00'; // Highlight max with green
        //   return 'transparent'; // Other points will not have any background color
        // }),
        // pointStyle: chartData?.map((_, index) => {
        //   if (index === minIndex || index === maxIndex) return 'circle'; // Use circle for highlighted points
        //   return false; // No style for other points
        // }),

      },
    ],
  };


  // Options for the chart
  const options = {
    responsive: true,
    type: "line",
    data: data,
    plugins: {
      legend: {
        display: true,
        // position: 'right',
      },
      tooltip: {
        enable: false,
        callbacks: {
          label: function (context) {
            return `$${context.raw.y.toFixed(2)}`; // Display the price in the tooltip
          },
        },
      }
    },
    scales: {
      x: {
        type: 'time', // Use the time scale
        time: {
          unit: 'hour', // Display data in hourly increments
          tooltipFormat: 'HH:mm', // Format for tooltip (24-hour time format)
          displayFormats: {
            hour: 'HH:mm', // Format for x-axis labels
          },
        },
        grid: {
          color: 'rgba(196, 196, 194, 0.2)', // Change x-axis grid line color
        },
        ticks: {
          source: 'auto',
          autoSkip: true,
          maxRotation: 0, // No rotation for labels
          minRotation: 0,
          stepSize: 1,
        }
      },
      y: {
        ticks: {
          // stepSize: 20000, // Set the difference between each tick (6000)
          beginAtZero: false,
        },
        min: yMin,
        max: yMax,
        grid: {
          color: 'rgba(196, 196, 194, 0.2)', // Change y-axis grid line color
        }
      }
    },
    elements: {
      line: {
        borderWidth: 1.5,
      },
      point: {
        radius: 0
      }
    }
  };


    return(
        <div className="w-[90%] lg:w-full flex items-center ">
            <Line data={data} options={options}/>
        </div>
    )
};



export default LineChart;