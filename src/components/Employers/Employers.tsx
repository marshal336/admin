'use client'
import styles from './Employers.module.scss'
import { SelectC } from './Select'
import { DataTable, columns, users } from './utils'

export default function Employers() {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h2 className={styles.h2}>Employers</h2>
                <div className={styles.info}>
                    <div className={styles.selects}>
                        <SelectC
                            placeholder='Status:Full-time (20)'
                            variants={["new", "old", "fresh", "stale"]}
                        />
                        <SelectC
                            placeholder='Department:All'
                            variants={["modern", "ancient", "recent", "outdated"]}
                        />
                    </div>
                    <div className={styles.table}>
                        <DataTable columns={columns} data={users} />
                    </div>
                </div>
            </div>
        </div>
    )
};
