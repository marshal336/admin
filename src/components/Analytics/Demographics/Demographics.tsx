"use client"
import React from 'react'
import styles from './Demographics.module.scss'
import { Card } from '~/components/ui'
import { Pie } from 'react-chartjs-2'
import { dataPie, stats } from './utils'
import { Chart as ChartJS, ArcElement } from 'chart.js'

ChartJS.register(
    ArcElement
)
interface IDemographicsProps { }

export default function Demographics({ }: IDemographicsProps) {

    return (
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
    )
}