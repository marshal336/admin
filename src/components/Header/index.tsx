'use client'
import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss'
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
    const [menu, setMenu] = React.useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.messages}>
                        <GoBell />
                        <div className={styles.message} />
                    </div>
                    <Image
                        src={'/my.jpg'}
                        alt=''
                        width={51}
                        height={51}
                        className={styles.logo} />
                    <IoIosArrowDown
                        className={menu ? styles['rotate-on'] : styles['rotate-off']}
                        onClick={() => setMenu(!menu)} />
                </div>
            </div>
        </header>
    )
};
