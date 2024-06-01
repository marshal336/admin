import Image from "next/image"
import { FaCheck, FaStopwatch } from "react-icons/fa"
import { IoCloseCircleOutline } from "react-icons/io5"

const status = [
    {
        title: 'Accept',
        el: <FaCheck className='bg-main text-[--foreground]' />
    },
    {
        title: 'Decline',
        el: <IoCloseCircleOutline className='bg-[#D6F8D6] text-[--foreground]' />
    }
]
export default function Doctor({ styles }: { styles: any }) {
    return (
        <div className={styles.doctor}>
            <Image src={'/my.jpg'} alt='logo' width={63} height={63} className={styles.doctorLogo} />
            <div className={styles.doctorInfo}>
                <h2 className={styles.doctorName}>Dr Gbenga Akal</h2>
                <h2 className={styles.doctorSpetialty}>Gyneacologist</h2>
                <h2 className={styles.workTime}>
                    <FaStopwatch />
                    <p>8:00AM, 30-06-2023</p>
                </h2>
            </div>
            <div className={styles.btns}>
                {status.map((el, i) => (
                    <div className={styles.btn} key={i}>
                        <h5 className={styles.h5}>{el.title}</h5>
                        {el.el}
                    </div>
                ))}
            </div>
        </div>
    )
};
