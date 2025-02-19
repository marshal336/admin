import { Metadata } from "next";
import { Transactions } from "~/components/Transactions";


export const metadata: Metadata = {
    title: 'Transaction'
}


export default function Page() {
    return <Transactions />
};




