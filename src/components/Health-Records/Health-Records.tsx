'use client'
import React from 'react'
import styles from './Health-Records.module.scss'
import { IoSearchOutline } from 'react-icons/io5'
import { DataTable, columns, users } from './utils'
import { Button, Input, Tabs, TabsContent, TabsList, TabsTrigger } from '../ui'


type TabsKeys = 'All' | 'Patient Services' | 'Diagnostic Services' | 'Pharmacy Services'
const tabs: TabsKeys[] = ['All', 'Patient Services', 'Diagnostic Services', 'Pharmacy Services']

export default function HealthRecords() {
    const [index, setIndex] = React.useState(0)

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h2 className={styles.h2}>Health records</h2>
                    <div className="flex gap-3 items-center">
                        <div className={styles.input}>
                            <Input placeholder='Search' />
                            <IoSearchOutline className={styles.inputLogo} />
                        </div>
                        <Button variant={'default'} className='bg-main'>Add records</Button>
                    </div>
                </div>
                <div className={styles.content}>
                    <Tabs defaultValue={tabs[0]}>
                        <TabsList>
                            {tabs.map((el, i) => (
                                <TabsTrigger value={el} className={`relative rounded-none`} onClick={() => setIndex(i)}>
                                    <p className={i === index ? 'text-[--main]' : ''}>{el}</p>
                                    {i === index && <div className="absolute bottom-0 w-full h-[3px] bg-[--main]" />}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {tabs.map((value, i) => (
                            <TabsContent key={i} value={value}>
                                <DataTable columns={columns} data={users} />
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    )
};
