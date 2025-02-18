"use client"
import React from 'react'
import { Card } from '~/components/ui'
import styles from './PieChart.module.scss'
import { Chart as ChartJS, ArcElement } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { dataPie as PieData } from './utils'
ChartJS.register(
    ArcElement
)
interface IPieChartProps {
}

export default function PieChart({ }: IPieChartProps) {

    return (
        <Card className={styles.pie}>
            <div className={styles.info}>
                <h3 className={styles.h3}>Income Statistics</h3>
                <div className={styles.dots}>...</div>
            </div>
            <div className={styles.pieWrapper}>
                <Pie data={PieData} options={{ cutout: '70%', responsive: true }} />
            </div>
            <div className={styles.stats}>
                {[...new Array(3)].map((_, i) => (
                    <div key={i} className={`${styles.item} ${i !== 2 ? 'border-r-black/30 border-r' : ''}`}>
                        <h2 className={styles.h2}>53%</h2>
                        <p className={styles.p}>Patient Services</p>
                    </div>
                ))}
            </div>
        </Card>
    )

}