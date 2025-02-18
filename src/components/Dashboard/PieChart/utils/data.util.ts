import { ChartData } from "chart.js";

export const dataPie: ChartData<"pie", number[], string> = {
    datasets: [
        {
            data: [10, 17, 13,],
            backgroundColor: ["#0AC60A", "#D6F8D6", '#ffa500'],
            weight: 3,
        },
    ]
};
