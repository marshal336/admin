'use client'
import React from 'react';
import Image from 'next/image'
import styles from './Sidebar.module.scss'
import Link from 'next/link';
import { Links } from './utils/links';


export default function Sidebar() {
    const [index, setIndex] = React.useState(0)
    const [circle, setCircle] = React.useState(true)

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src={'/sidebar-logo.svg'} alt='logo' width={67} height={54} />
                    <h2 className={styles.h2}>Mgroup Hospital</h2>
                </div>
                <div className={styles.info}>
                    {Links.map((el, i) => (
                        <>
                            <Link
                                href={el.link ? el.link : ''}
                                key={i}
                                className={`${styles['info-item']}
                            ${(index === i && i !== Links.length - 1) ? styles['index-color'] : ''}`}
                                onClick={() => setIndex(i)}>
                                {el.icon}
                                <h3>{el.title}</h3>
                            </Link>
                            {i === 7 && (
                                <div className={styles.separator} />
                            )}
                        </>
                    ))}
                </div>
                <div className={styles.mode}>
                    <h3>Dark Mode</h3>
                    <div className={`${styles.radio} 
                    ${circle ? 'justify-start' : 'justify-end'}`}
                        onClick={() => setCircle(!circle)}>
                        <div className={`${styles.circle}`} />
                    </div>
                </div>
            </div>
        </nav>
    )
};
