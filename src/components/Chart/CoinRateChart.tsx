// src/components/CoinRateChart.tsx
"use client"
// src/components/CoinRateChart.tsx

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const CoinRateChart: React.FC = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Rate',
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 80, 70], // Example data
            fill: false,
            backgroundColor: '#28145E',
            borderColor: '#684EB1',
            boxShadow : '0px 4px 9.6px 0px #684EB1 inset',
            borderWidth: 1,
            tension: 0.1,
            pointRadius: 0, 
          },
        ],
      };

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
                align: 'end' as const,
                labels: {
                  boxWidth: 26,
                  padding: 10,
                },
              },
          tooltip: {
            callbacks: {
              label: function (tooltipItem: any) {
                return `Value: ${tooltipItem.raw}`;
              },
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Months',
              color: '#DEDEDE', 
              padding: {
                top: 20, // Adjust this value to add space above the x-axis title
              },
            },
            ticks: {
              autoSkip: false,
              maxRotation: 45,
              minRotation: 0,
              color: '#DEDEDE', 
            },
            grid: {
              display: false,
            },
          },
          y: {
            title: {
              display: true,
            //   text: 'Values',
              color: '#DEDEDE', 
            },
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20,
              callback: function (value: any) {
                return value;
              },
              color: '#DEDEDE', 
            },
          },
        },
      };

  return (
    <div className="w-full lg:h-[600px] h-[400px]  p-10 lg:p-20"
    style={{
        background: 'linear-gradient(180deg, #170C37 0%, #42229D 100%)',
        // boxShadow: '0px 4px 9.6px 0px #684EB1A8',
        borderRadius: '5px',
      }}
    > {/* Adjust height as needed */}
     <h1 className="text-sm font-bold text-[#FAFAFA] mb-4 text-start mx-20">Monthly Data Chart</h1>
      <Line data={data} options={options} />
    </div>
  );
};

export default CoinRateChart;
