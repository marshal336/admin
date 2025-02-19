import { CustomAccordion } from './CustomAccordion'
import styles from './Notification.module.scss'
import { accordions } from './utils'

export default function Notification() {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h3 className={styles.h3}>Notification</h3>
                    <p className={styles.p}>Select the notifications you prefer to receive and those you would rather avoid.</p>
                </div>
                <div className={styles.accordions}>
                    {accordions.map((el, i) => (
                        <CustomAccordion {...el} key={i} />
                    ))}
                </div>
            </div>
        </div>
    )
};
