"use client"
import React from 'react'
import styles from './Liner.module.scss'
import { Card } from '~/components/ui'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { ArcElement, CategoryScale, Chart as ChartJS, Filler, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { dataLine, itemsInfo, linerOptions } from './utils'

ChartJS.register(
    LineElement,
    LinearScale,
    PointElement,
    Filler,
)

interface ILinerProps {
}

export default function Liner({ }: ILinerProps) {

    return (
        <Card className={styles.liner}>
            <div className={styles.linerInfo}>
                <h1 className={styles.h1}>Statistics to date</h1>
                <div className={styles.stats}>
                    <div className={styles.items}>
                        {itemsInfo.map((el, i) => (
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
                <Line data={dataLine} options={linerOptions} />
            </div>
        </Card>
    )

}