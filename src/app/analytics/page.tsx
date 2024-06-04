'use client'
import styles from './Analitycs.module.scss'
import { Card } from '~/components/ui/card'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineHealthAndSafety } from "react-icons/md";
import { items, stats } from './utils/items.utill';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, ChartData, Tooltip, Filler, ArcElement } from 'chart.js'
import { Line, Pie } from 'react-chartjs-2'
import { linerOptions } from './utils/liner-options';
import { DataTable } from './utils/table.util';
import { columns } from './utils/columns';
import { users } from './utils/data';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Filler,
    ArcElement
)
const data: ChartData<"line", number[], string> = {
    labels: ["JAN", "FEB", "MAR", "APRIL", "MAY", "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC",],
    datasets: [
        {
            data: [12, 43, 32, 22, 21, 11, 23, 232, 223, 2, 31, 56, 35, 4, 12, 43, 32, 22, 21, 11, 23, 232, 223, 2, 31, 56, 35, 4],
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
const dataPie: ChartData<"pie", number[], string> = {
    datasets: [
        {
            data: [10, 23, 32],
            backgroundColor: ["rgb(27, 89, 248)", 'rgb(247, 152, 29)', 'rgb(10, 198, 10)'],
            weight: 0.3,

        },
    ]
};
export default function Analitycs() {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h1 className={styles.h1}>Analitycs</h1>
                <div className={styles.Grid}>
                    <Card className={styles.liner}>
                        <div className={styles.linerInfo}>
                            <h1 className={styles.h1}>Statistics to date</h1>
                            <div className={styles.stats}>
                                <div className={styles.items}>
                                    {items.map((el, i) => (
                                        <div className={styles.item} key={i}>
                                            <h2 className={styles.h2}>{el.title}</h2>
                                            <p className={styles.p}>{el.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.arrows}>
                                    <MdKeyboardArrowLeft />
                                    <MdKeyboardArrowRight />
                                </div>
                            </div>
                        </div>
                        <div style={{ height: 280, marginTop: 'auto' }}>
                            <Line data={data} options={linerOptions} />
                        </div>
                    </Card>
                    <Card className={styles.demographics}>
                        <div className={styles.info}>
                            <h3 className={styles.h3}>Income Statistics</h3>
                            <div className={styles.dots}>...</div>
                        </div>
                        <div className={styles.pie}>
                            <Pie data={dataPie} options={{ cutout: '70%' }} />
                        </div>
                        <div className={styles.stats}>
                            {stats.map((el, i) => (
                                <div className={styles.item} key={i}>
                                    <div className={styles.dot} style={{ backgroundColor: el.color }} />
                                    <h3 className={styles.h3}>{el.title}</h3>
                                </div>
                            ))}
                        </div>
                    </Card>
                    <Card className={styles.admission}>
                        <h3 className={styles.h3}>Admission and Discharge Rates</h3>
                        <DataTable columns={columns} data={users} />
                    </Card>
                    <Card className={styles.equlpment}>
                        <div className={styles.info}>
                            <h3 className={styles.h3}>Equipment Utilization</h3>
                            <div className={styles.dots}>...</div>
                        </div>
                        <div className={styles.items}>
                            {[...new Array(20)].map((_, i) => (
                                <div className={styles.item} key={i}>
                                    <MdOutlineHealthAndSafety className={styles.logo} />
                                    <div className={styles.inf}>
                                        <h3 >Lorem</h3>
                                        <p >Learn more about our credit cards </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
};
