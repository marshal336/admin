import React from 'react'
import { Card } from '~/components/ui'
import styles from './Admission.module.scss'
import { DataTable, columns, users } from './utils'

interface IAdmissionProps { }

export default function Admission({ }: IAdmissionProps) {

    return (
        <Card className={styles.admission}>
            <h3 className={styles.h3}>Admission and Discharge Rates</h3>
            <DataTable columns={columns} data={users} />
        </Card>
    )

}