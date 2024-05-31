'use client'
import styles from './Dasboard.module.scss'
import Item from './utils/item'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement } from 'chart.js'
import { Bar, Pie } from "react-chartjs-2";
import { options } from './utils/options';
import { dataBar, dataPie } from './utils/data';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement
)

export default function Dashboard() {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h1 className={styles.h1}>Dashboard</h1>
                <div className={styles.Grid}>
                    <Item styles={styles} title='Patient Services' h1='1070' p='-1.5%' />
                    <Item styles={styles} title='No of Admitted Patients' h1='3270' p='-2.5%' />
                    <Item styles={styles} title='Income Statistics' h1='1270' p='-3.0%' />
                    <Item styles={styles} title='No of Admitted Patients' h1='2270' p='-4.6%' />
                    <div className={styles.bar}>
                        <div className={styles.info}>
                            <h1 className={styles.title}>Finances</h1>
                            <div className={styles.incomeExpence}>
                                {['Income', 'Expence'].map((el, i) => (
                                    <div className={styles.item} key={i}>
                                        <div className={`${styles.circle} ${i === 0 ? 'bg-main' : 'bg-[#D6F8D6]'}`} />
                                        <h4 className={styles.h4}>{el}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <Bar data={dataBar} options={{ ...options, responsive: true }} />
                        </div>
                    </div>
                    <div className={styles.pie}>
                        <div className={styles.info}>
                            <h3 className={styles.h3}>Income Statistics</h3>
                            <div className={styles.dots}>...</div>
                        </div>
                        <div className={styles.pieWrapper}>
                            <Pie data={dataPie} options={{ cutout: '70%', responsive: true }} />
                        </div>
                        <div className={styles.stats}>
                            {[...new Array(3)].map((_, i) => (
                                <div key={i} className={`${styles.item} ${i !== 2 ? 'border-r-black/30 border-r' : ''}`}>
                                    <h2 className={styles.h2}>53%</h2>
                                    <p className={styles.p}>Patient Services</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
