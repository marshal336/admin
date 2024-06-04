interface ITransactionsProps {
    styles: any
    h1: string
    p: string
}
export default function Transactions({ styles, h1, p }: ITransactionsProps) {
    return (
        <div className={styles.item}>
            <h1>{h1}</h1>
            <p>{p}</p>
        </div>
    )
};
