import { Metadata } from "next";
import { HealthRecords } from "~/components/Health-Records";


export const metadata: Metadata = {
    title: 'Health Records'
}


export default function Page() {
    return <HealthRecords />
};
