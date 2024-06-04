export const linerOptions = {
    maintainAspectRatio: false,
    scales: {
        y: {
            ticks: {
                callback: (tickValue: any, index: number, ticks: any) => {
                    return `N${50 * index}k`
                },
            },
            grid: {
                display: false
            },
            border: {
                display: false
            },

        },
        x: {
            ticks: {
                maxRotation: 0,
            },
            grid: {
                display: false
            },
            border: {
                display: false
            }
        }
    },
}