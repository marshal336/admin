'use client'
import { IoSearchOutline } from 'react-icons/io5'
import styles from './Healthrecords.module.scss'
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import React from 'react'


const tabs = ['All', 'Patient Services', 'Diagnostic Services', 'Pharmacy Services']

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
                                <TabsTrigger value={el} className={`relative`} onClick={() => setIndex(i)}>
                                    <p className={i === index ? 'text-main' : ''}>{el}</p>
                                    {i === index && <div className="absolute bottom-0 w-full h-[1px] bg-main" />}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <TabsContent value={tabs[0]}>
                            sd
                        </TabsContent>
                        <TabsContent value={tabs[1]}>
                            sdweq
                        </TabsContent>
                        <TabsContent value={tabs[2]}>
                            wsfsfs
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
};
