import { ChartData } from "chart.js";
import { generateDynamicData } from "~/utils";

export const dataBar: ChartData<"bar", number[], string> = {
    labels: ["JAN", "FEB", "MAR", "APRIL", "MAY", "JUNE"],
    datasets: [
        {
            data: generateDynamicData(8),
            backgroundColor: '#0AC60A',
            borderRadius: 60,
            barPercentage: 0.7,
        },
        {
            data: generateDynamicData(8),
            backgroundColor: "#D6F8D6",
            borderRadius: 60,
            barPercentage: 0.7
        }
    ]
};