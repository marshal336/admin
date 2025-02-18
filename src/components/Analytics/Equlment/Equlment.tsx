"use client"
import React from 'react'
import { Card } from '~/components/ui'
import styles from './Equlment.module.scss'
import { MdOutlineHealthAndSafety } from 'react-icons/md'

interface IEqulmentProps { }

export default function Equlment({ }: IEqulmentProps) {

    return (
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
    )

}