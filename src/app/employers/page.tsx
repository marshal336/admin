import { Metadata } from "next";
import { Employers } from "~/components/Employers";


export const metadata: Metadata = {
    title: 'Employers'
}

export default function Page() {
    return <Employers />
};
