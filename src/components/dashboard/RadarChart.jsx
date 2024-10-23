import React from "react";
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const getSentimentLabel = (percentage) => {
  if (percentage < 47.5) {
      return { label: 'bearish', score: percentage };
  } else if (percentage > 52.5) {
      return { label: 'bullish', score: percentage };
  } else {
      return { label: 'neutral', score: percentage };
  }
};

function RadarChart({ sentimentData }){

  const dataValues = sentimentData ? [
    sentimentData.news_score,
    sentimentData.twitter_profile_score,
    sentimentData.twitter_hashtag_score,
    // sentimentData.overall_score
] : [0, 0, 0];

const sentimentInfo = dataValues.map(getSentimentLabel);

const sentimentCategories = [
  'News Sentiment',
  'Twitter Profile',
  'Twitter Hashtags',
  'Overall Sentiment'
];

// Dynamically generate labels combining the sentiment label and category
const dynamicLabels = sentimentInfo.map((info, index) => {
  return `${info.label}`;
});


const data = {
  labels: dynamicLabels, 
  datasets: [
      {
          label: 'Sentiment Scores',
          data: sentimentInfo.map((info) => info.score),
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Background color
          borderColor: 'rgba(54, 162, 235, 1)', // Border color
          borderWidth: 1
      }
  ]
};

      // Options for the radar chart
      const options = {
        
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
                label: function (tooltipItem) {
                    const sentimentLabel = sentimentInfo[tooltipItem.dataIndex].label;
                    const score = tooltipItem.raw;
                    return `Score: ${score}, Sentiment: ${sentimentLabel}`;
                }
            }
        }
    },
        //   tooltip: {
        //     callbacks: {
        //       label: function(tooltipItem) {
        //         return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
        //       }
        //     }
        //   }
        // },
        scales: {
          r: {
            angleLines: {
              color: 'rgba(255, 99, 132, 0.2)' // Color of angle lines
            },
            grid: {
              color: 'rgba(255, 99, 132, 0.2)' // Color of grid lines
            },
            ticks: {
                backdropColor: 'rgba(0, 0, 0, 0)', // Remove backdrop color of tick labels
            },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      };


    return(
        <div className="">
            <div className="text-center">
                <h1 className="text-[#E1E3DD] text-[1.5rem] capitalize roboto-semimediu">overview</h1>
                <h1 className="text-[#E1E3DD] text-[1.5rem] capitalize roboto-semimediu">sentiment analysis</h1>
            </div>
            <Radar style={{height: "20rem"}} data={data} options={options} />
        </div>
    )
};



export default RadarChart;