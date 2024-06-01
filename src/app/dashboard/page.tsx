'use client'
import React from 'react';
import styles from './Dasboard.module.scss'
import Doctor from './utils/doctor.util';
import Item from './utils/item.util'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement } from 'chart.js'
import { Bar, Pie } from "react-chartjs-2";
import { options } from './utils/options.utils';
import { dataBar, dataPie, users } from './utils/data';
import { Card } from "~/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { DataTable } from './utils/table.util';
import { columns } from './utils/colomns';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement
)

export default function Dashboard() {
    const [index, setIndex] = React.useState(0)
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h1 className={styles.h1}>Dashboard</h1>
                <div className={styles.Grid}>
                    <Item styles={styles} title='Patient Services' h1='1070' p='-1.5%' />
                    <Item styles={styles} title='No of Admitted Patients' h1='3270' p='-2.5%' />
                    <Item styles={styles} title='Income Statistics' h1='1270' p='-3.0%' />
                    <Item styles={styles} title='No of Admitted Patients' h1='2270' p='-4.6%' />
                    <Card className={styles.bar}>
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
                    </Card>
                    <Card className={styles.pie}>
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
                    </Card>
                    <Card className={styles.patient}>
                        <Tabs defaultValue="Weekly">
                            <div className={styles.info}>
                                <h1 className='font-semibold text-lg'>Patient List</h1>
                                <TabsList>
                                    {["Weekly", "Monthly", 'Quarterly'].map((el, i) => (
                                        <div className="relative" key={i} onClick={() => setIndex(i)}>
                                            <TabsTrigger value={el} >{el}</TabsTrigger>
                                            {index === i && <div className={styles.separator} />}
                                        </div>
                                    ))}
                                </TabsList>
                            </div>
                            <TabsContent value="Weekly">
                                <DataTable columns={columns} data={users} />
                            </TabsContent>
                            <TabsContent value="Monthly">Change your password here.</TabsContent>
                            <TabsContent value="Quarterly">Data</TabsContent>
                        </Tabs>
                    </Card>
                    <Card className={styles.appointments}>
                        <div className={styles.info}>
                            <h3 className={styles.h3}>Appointments</h3>
                            <div className={styles.dots}>...</div>
                        </div>
                        <div className={styles.doctors}>
                            <Doctor styles={styles} />
                            <Doctor styles={styles} />
                            <Doctor styles={styles} />
                            <Doctor styles={styles} />
                            <Doctor styles={styles} />
                            <Doctor styles={styles} />
                            <Doctor styles={styles} />
                        </div>
                    </Card>
                </div>
            </div >
        </div >
    )
};
