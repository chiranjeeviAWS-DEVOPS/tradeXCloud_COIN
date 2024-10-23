import React,{useState, useEffect} from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { display } from "@mui/system";
import { useSelector } from "react-redux";


// Register necessary components
ChartJS.register(Tooltip, Legend, ArcElement);




function DoughnetChart(){

    //fetching total supply and circulating supply from redux

    const [percentage, setPercentage] = useState(0);
    

    const totalSupply = useSelector((state) => state.tokenData.tokenomics.totalSupply);
    const circulatingSupply = useSelector((state) => state.tokenData.tokenomics.circulatingSupply);


    useEffect(() =>{
        const val = ((circulatingSupply / totalSupply) * 100).toFixed(2);
        setPercentage(val);

    },[totalSupply, circulatingSupply]);


    // Define the data and options for the doughnut chart
    const data = {
        labels: ["val1", "val2"],
        datasets: [
        {
            label: 'Dataset 1',
            data: [percentage, (100 - percentage)], // Data points
            backgroundColor: [
            
            'rgba(127, 86, 217, 1)',
            'rgba(244, 235, 255, 1)',
            
            ],
            borderColor: [
            
            'rgba(127, 86, 217, 1)',
            'rgba(244, 235, 255, 1)',
            
            ],
            borderWidth: 1,
        },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Disable the legend
              },
            tooltip: {
                callbacks: {
                label: function (tooltipItem) {
                    return `${tooltipItem.label}: ${tooltipItem.raw}`; // Customize tooltip label
                },
                },
            },
        },
    };
    return(
        <div className="relative w-[8rem] h-[8rem]">
            <Doughnut data={data} options={options} />
            <div className="absolute top-0 h-full w-full flex justify-center items-center">
                <div className="text-center">
                    <p className="text-[#E1E3DD] text-[0.875rem]">{percentage}</p>
                    <p className="text-[#616E85] text-[0.75rem]">CS</p>
                </div>
            </div>
            
        </div>
    )
};


export default DoughnetChart;