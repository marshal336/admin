'use client'
import { Fragment, useState } from 'react';
import Image from 'next/image'
import styles from './Sidebar.module.scss'
import Link from 'next/link';
import { Links } from './utils/links';
import { useTheme } from 'next-themes';


export default function Sidebar() {
    const { setTheme, theme } = useTheme()
    const [index, setIndex] = useState(0)
    const [menu, setMenu] = useState(false)

    return (
        <nav className={`${styles.nav} ${!menu ? 'w-[300px]' : 'w-[80px] transition-all'} `}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={`xl:hidden block ${styles.img}`}>
                        <Image src={'/sidebar-logo.svg'} alt='logo' width={65} height={50} onClick={() => setMenu(!menu)} />
                    </div>
                    <div className={`xl:block hidden ${styles.img}`}>
                        <Image src={'/sidebar-logo.svg'} alt='logo' width={65} height={50} />
                    </div>
                    <h2 className={`${styles.h2} ${menu ? 'hidden' : ""}`}>Mgroup Hospital</h2>
                </div>
                <div className={styles.info}>
                    {Links.map((el, i) => (
                        <Fragment
                            key={i}
                        >
                            <Link
                                href={el.link ? el.link : ''}
                                className={`${styles['info-item']} ${menu ? 'justify-center' : "justify-start"}
                            ${(index === i && i !== Links.length - 1) ? styles['index-color'] : ''}`}
                                onClick={() => setIndex(i)}>
                                {el.icon}
                                <h3 className={`${styles.h3} ${menu ? 'hidden' : ""}`}>{el.title}</h3>
                            </Link>
                            {i === 7 && (
                                <div className={styles.separator} />
                            )}
                        </Fragment>
                    ))}
                </div>
                <div className={`${styles.mode}  ${menu ? 'flex-col gap-2' : ""} `}>
                    <h3 className={`${menu ? 'text-center text-xs' : "font-normal text-lg"} ${styles.h3}`}>Dark Mode</h3>
                    <div
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        className={`${styles.radio} 
                    ${theme === 'light' ? 'justify-start' : 'justify-end'}`}>
                        <div className={`${styles.circle}`} />
                    </div>
                </div>
            </div>
        </nav>
    )
};
