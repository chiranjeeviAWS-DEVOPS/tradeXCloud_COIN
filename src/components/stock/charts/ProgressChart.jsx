import React from "react";
import Chart from 'react-apexcharts';

function ProgressChart({progress}){

    const series = [progress]; // Progress value

    const options = {
        chart: {
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                hollow: {
                    size: '45%', // Size of the hollow center
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: true,
                        fontSize: '24px',
                        color: '#FFFFFF',
                    },
                },
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'horizontal',
                gradientToColors: ['#4caf50'],
                stops: [0, 100],
            },
        },
        stroke: {
            lineCap: 'round',
        },
        labels: ['Progress'],
    };


    return(
        <div className="relative">
            <div className="" style={{ width: '350px' }}>
                <Chart options={options} series={series} type="radialBar" />
            </div>
        </div>
    )
};



export default ProgressChart;