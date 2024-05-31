import { Card} from "~/components/ui/card"
interface IItemProps {
    styles: any
    title: string
    h1: string
    p: string
}

export default function Item({ styles, title, h1, p }: IItemProps) {
    return (
        <Card className={styles.gridItem}>
            <h2 className={styles.h2}>{title}</h2>
            <div className={styles.prices}>
                <h1 className={styles.h1}>{h1}</h1>
                <p className={`
                ${styles.p}
                ${p.includes('-1.5%')
                ? 'text-green-600 bg-green-200'
                : p.includes('-2.5%')
                ? 'bg-purple-200 text-purple-600'
                : p.includes('-3.0%')
                ? 'bg-red-200 text-red-600'
                : p.includes('-4.6%')
                ? 'text-blue-600 bg-blue-200'
                : ''
                }`}>{p}</p>
            </div>
            <p className={styles.p}>Compared to (2300 last quarter)</p>
        </Card>
    )
};
