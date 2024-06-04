'use client'
import styles from './Employees.module.scss'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select"
import { DataTable } from './utils/table.util'
import { columns } from './utils/columns'
import { users } from './utils/data'

export default function Employees() {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h2 className={styles.h2}>Employees</h2>
                <div className={styles.info}>
                    <div className={styles.selects}>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Status:Full-time (20)" />
                            </SelectTrigger>
                            <SelectContent className='bg-[--bg]'>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Department:All" />
                            </SelectTrigger>
                            <SelectContent className='bg-[--bg]'>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className={styles.table}>
                        <DataTable columns={columns} data={users}/>
                    </div>
                </div>
            </div>
        </div>
    )
};
