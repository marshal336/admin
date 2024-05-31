import { ChartData } from "chart.js";

export const dataBar: ChartData<"bar", number[], string> = {
    labels: ["JAN", "FEB", "MAR", "APRIL", "MAY", "JUNE"],
    datasets: [
        {
            data: [10, 22, 4, 8, 20, 12],
            backgroundColor: "#0AC60A",
            borderRadius: 60,
            barPercentage: 0.7,
        },
        {
            data: [8, 12, 4, 8, 16, 23],
            backgroundColor: "#D6F8D6",
            borderRadius: 60,
            barPercentage: 0.7
        }
    ]
};
export const dataPie: ChartData<"pie", number[], string> = {
    datasets: [
        {
            data: [10, 17, 13,],
            backgroundColor: ["#0AC60A", "#D6F8D6", '#ffa500'],
            weight: 3,
        },
    ]
};