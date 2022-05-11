import React from 'react';
import { Line } from "react-chartjs-2"; 
import { Chart as Chartjs } from "chart.js/auto"

const LineChart = ({data}) => {
    const options = {
        maintainAspectRatio: false ,
        plugins: {
          legend: {
            display: false
          }
        }
      };
  return (
    <Line data={data} options={options}/>
  )
}

export default LineChart