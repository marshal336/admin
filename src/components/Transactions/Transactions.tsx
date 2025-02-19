'use client'
import styles from './Transactions.module.scss'
import { IoSearchOutline } from "react-icons/io5";
import { Button, Input } from "~/components/ui"
import { data, transactions, columns, DataTable } from './utils';
import Transaction from './Transaction';

export default function Transactions() {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h2 className={styles.h2}>Transactions</h2>
                    <div className={styles.input}>
                        <Input placeholder='Search' />
                        <IoSearchOutline className={styles.inputLogo} />
                    </div>
                </div>
                <div className={styles.stats}>
                    <div className={styles.transactions}>
                        <div className={styles.items}>
                            {transactions.map((el, i) => (
                                <Transaction styles={styles} {...el} key={i} />
                            ))}
                        </div>
                        <Button variant={'default'} size={'lg'} className='bg-main'>Add new Transaction</Button>
                    </div>
                    <div className={styles.table}>
                        <DataTable columns={columns} data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
};
