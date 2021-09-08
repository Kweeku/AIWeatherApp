import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = props => {

  const data = {
    labels: props.chartLabels,
    datasets: [
      {
        label: props.dataLabel,
        data: props.chartValues,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
  return (
    <div className='max-width'>
      <div className='header'>
        <h1 className='title'>{props.title}</h1>
      </div>
      <Line data={data} options={options} />
    </div>
  )
};

export default LineChart;