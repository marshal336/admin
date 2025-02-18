'use client'
import React from 'react'
import styles from './BarChart.module.scss'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Card } from '~/components/ui'
import { Bar } from 'react-chartjs-2'
import { options as BarOptions, dataBar as DataBar } from './utils'

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale
)
interface IBarChartProps {
}

export default function BarChart({ }: IBarChartProps) {

    return (
        <Card className={styles.bar}>
            <div className={styles.info}>
                <h1 className={styles.title}>Finances</h1>
                <div className={styles.incomeExpence}>
                    {['Income', 'Expence'].map((el, i) => (
                        <div className={styles.item} key={i}>
                            <div className={`${styles.circle}`}
                                style={{
                                    background: i === 0 ? '#0ac60a' : '#D6F8D6'
                                }}
                            />
                            <h4 className={styles.h4}>{el}</h4>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Bar
                    data={DataBar}
                    options={{ ...BarOptions, responsive: true }}
                />
            </div>
        </Card>
    )

}