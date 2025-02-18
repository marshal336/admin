import { ChartData } from "chart.js";
import { generateDynamicData } from "~/utils";



export const dataLine: ChartData<"line", number[], string> = {
    labels: ["JAN", "FEB", "MAR", "APRIL", "MAY", "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC",],
    datasets: [
        {
            data: generateDynamicData(28),
            borderColor: '#0AC60A',
            backgroundColor: (context) => {
                const colors = [
                    'rgba(10, 198, 10, 0.54)',
                    'rgba(10, 198, 10, 0.15)',
                    'rgba(10, 198, 10, 0)',
                ]
                if (!context.chart.chartArea) return
                const { ctx, chartArea: { top, bottom } } = context.chart
                const gradient = ctx.createLinearGradient(0, top, 0, bottom)
                gradient.addColorStop(0.4, colors[0])
                gradient.addColorStop(0.8, colors[1])
                gradient.addColorStop(0, colors[2])
                return gradient
            },
            pointStyle: false,
            borderWidth: 1,
            fill: true,
        },
    ]
};

export const itemsInfo = [
    { title: 'personnel', desc: '#300 Million' },
    { title: 'SUPPLIES', desc: '#34 Million' },
    { title: 'UTILITIES', desc: '#18 Million' },
]