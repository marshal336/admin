import { Metadata } from "next";
import { Dashboard } from "~/components";

export const metadata: Metadata = {
    title: 'Admin | Dashboard',
}

export default function Page() {
    return <Dashboard />
}