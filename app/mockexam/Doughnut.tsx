// components/DoughnutChart.tsx

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import React from 'react';
import { Kantumruy } from '@/config/fonts';

// Register the necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string[];
            borderColor: string[];
            borderWidth: number;
        }[];
    };
    options?: object;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, options }) => {
    return <Doughnut className={`${Kantumruy.className}`}  data={data} options={options} />;
};

export default DoughnutChart;
