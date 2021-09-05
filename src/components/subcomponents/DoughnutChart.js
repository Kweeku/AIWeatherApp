import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = (props) => {

    const data = {
        labels: [props.title],
        datasets: [
            {
                label: `${props.humidity * 100}%`,
                data: [props.humidity * 100, 42],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(255, 255, 255, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 255, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <>
            <div className='header'>
                <h1 className='title'>{props.title}</h1>
            </div>
            <Doughnut data={data} />
        </>
    )
};

export default DoughnutChart;