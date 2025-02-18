'use client'
import styles from './Analytics.module.scss'
import { Liner } from './Liner';
import { Demographics } from './Demographics';
import { Admission } from './Admission';
import { Equlment } from './Equlment';

export default function Analytics() {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h1 className={styles.h1}>Analitycs</h1>
                <div className={styles.Grid}>

                    <Liner />

                    <Demographics />

                    <Admission />

                    <Equlment />

                </div>
            </div>
        </div>
    )
};
