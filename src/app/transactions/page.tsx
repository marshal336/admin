'use client'
import styles from './Transactions.module.scss'
import { Input } from '~/components/ui/input'
import { IoSearchOutline } from "react-icons/io5";
import { Button } from "~/components/ui/button"
import TR from './utils/Transactions'
import { DataTable } from './utils/table.util';
import { columns } from './utils/columns';
import { data } from './utils/data';

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
                            <TR styles={styles} h1='21890' p='Success Transactions' />
                            <TR styles={styles} h1='180' p='Failed Transactions' />
                            <TR styles={styles} h1='23890' p='Total Transactions' />
                            <TR styles={styles} h1='1890' p='Pending Transactions' />
                        </div>
                        <Button variant={'default'} size={'lg'} className='bg-main'>Add new Transaction</Button>
                    </div>
                    <div className={styles.table}>
                        <DataTable columns={columns} data={data}/>
                    </div>
                </div>
            </div>
        </div>
    )
};
