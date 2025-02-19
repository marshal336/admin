'use client'
import { Card, Input, Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui'
import styles from './Settings.module.scss'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { links } from './utils';
import { useState } from 'react';
import { Notification } from './Notification';

export default function Settings() {
    const [input, setInput] = useState('')
    const [index, setIndex] = useState(0)

    return (
        <Card className={styles.root}>
            <Tabs defaultValue={links[0].value} orientation='vertical' className={styles.container}>
                <div className={styles.one}>
                    <h2 className={styles.h2}>Settings</h2>
                    <div className={styles.items}>
                        <div className={styles.input}>
                            <IoSearchOutline className={styles.icon} />
                            <Input
                                placeholder='Search setting'
                                value={input}
                                onChange={e => setInput(e.target.value)} />
                        </div>
                        <TabsList className={styles.links}>
                            {links.filter(el => el.value.toLowerCase().includes(input.toLowerCase())).map(({ value }, i) => (
                                <TabsTrigger
                                    onClick={() => setIndex(i)}
                                    value={value}
                                    key={i}
                                    className={styles.link}>
                                    <p>{value}</p>
                                    <IoIosArrowForward />
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                </div>
                <div className={styles.two}>
                    <TabsContent value={links[2].value}>
                        <Notification />
                    </TabsContent>
                </div>
            </Tabs>
        </Card>
    )
};
