import { ChartData } from "chart.js";

export const stats = [
    {
        title: 'Age',
        color: 'rgb(27, 89, 248)'
    },
    {
        title: 'Location',
        color: 'rgb(247, 152, 29)'
    },
    {
        title: 'Gender',
        color: 'rgb(10, 198, 10)'
    }]

export const dataPie: ChartData<"pie", number[], string> = {
    datasets: [
        {
            data: [10, 23, 32],
            backgroundColor: ["rgb(27, 89, 248)", 'rgb(247, 152, 29)', 'rgb(10, 198, 10)'],
            weight: 0.3,

        },
    ]
};