import styles from './Notification.module.scss'
import { VscSettings } from "react-icons/vsc";
import { IoMdOptions } from "react-icons/io";
import { FaFish } from "react-icons/fa6";
import { CgScreenMirror } from "react-icons/cg";
import { accordions } from '../links.util';
import CustomAccordion from './utils/accordion.util';


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
                        <CustomAccordion {...el} styles={styles} key={i} />
                    ))}
                </div>
            </div>
        </div>
    )
};
