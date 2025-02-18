"use client"
import { Card, Tabs, TabsList, TabsTrigger, TabsContent } from '~/components/ui'
import { columns, DataTable, users } from './utils'
import styles from './Patient.module.scss'
import { useState } from 'react'

type TabsName = 'Weekly' | 'Monthly' | 'Quarterly'
const tabsNames: TabsName[] = ["Weekly", "Monthly", 'Quarterly']


interface IPatientProps { }

export default function Patient({ }: IPatientProps) {
    const [index, setIndex] = useState(0)

    return (
        <Card className={styles.patient}>
            <Tabs defaultValue={tabsNames[0]}>
                <div className={styles.info}>
                    <h1 className='font-semibold text-lg'>Patient List</h1>
                    <TabsList className='bg-transparent'>
                        {tabsNames.map((value, i) => (
                            <div className="relative" key={i} onClick={() => setIndex(i)}>
                                <TabsTrigger className='!bg-transparent' value={value}>{value}</TabsTrigger>
                                {index === i && <div className={styles.separator} />}
                            </div>
                        ))}
                    </TabsList>
                </div>

                {tabsNames.map((value, i) => (
                    <TabsContent key={i} value={value}>
                        <DataTable columns={columns} data={users} />
                    </TabsContent>
                ))}
            </Tabs>
        </Card>
    )

}