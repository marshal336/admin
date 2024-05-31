export const options = {
    scales: {
        x: {
            grid: {
                display: false
            },
            ticks: {
                font: {
                    size: 16
                },
                color: '#a7a7a7'
            },
            border: {
                display: false
            }
        },
        y: {
            grid: {
                display: false
            },
            ticks: {
                callback: (_: any, index: number, __: any) => {
                    return `${10 * index}M`
                },
                stepSize: 5,
                color: '#a7a7a7',
                font: {
                    size: 16
                }
            },
            border: {
                display: false
            }
        }
    }
}