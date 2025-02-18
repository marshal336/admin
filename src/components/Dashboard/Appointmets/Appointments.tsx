"use client"
import React from 'react'
import { Card } from '~/components/ui'
import { Doctor } from './Doctor'
import styles from './Appointments.module.scss'

interface IAppointmentsProps {
}

export default function Appointments({ }: IAppointmentsProps) {

    return (
        <Card className={styles.appointments}>
            <div className={styles.info}>
                <h3 className={styles.h3}>Appointments</h3>
                <div className={styles.dots}>...</div>
            </div>
            <div className={styles.doctors}>
                {[...new Array(10)].map((_, i) => (
                    <Doctor key={i} />
                ))}
            </div>
        </Card>
    )

}