import React from 'react';
import styles from './Dasboard.module.scss'
import Item from './utils/item.util';
import { BarChart } from './BarChart';
import { PieChart } from './PieChart';
import { Patient } from './Patient';
import { Appointments } from './Appointmets';

const gridItems = [
    { title: 'Patient Services', h1: '1070', p: '-1.5%' },
    { title: 'No of Admitted Patients', h1: '3270', p: '-2.5%' },
    { title: 'Income Statistics', h1: '1270', p: '-3.0%' },
    { title: 'No of Admitted Patients', h1: '2270', p: '-4.6%' },
];


export default function Dashboard() {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h1 className={styles.h1}>Dashboard</h1>
                <div className={styles.Grid}>
                    {gridItems.map((item, i) => (
                        <Item
                            key={i}
                            styles={styles}
                            title={item.title}
                            h1={item.h1}
                            p={item.p} />
                    ))}

                    <BarChart />
                    <PieChart />
                    <Patient />
                    <Appointments />
                </div>
            </div >
        </div >
    )
};
