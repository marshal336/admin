import { Metadata } from 'next';
import { Analytics } from '~/components/Analytics';

export const metadata: Metadata = {
    title: 'Analitycs'
}

export default function Page() {
    return <Analytics />
}
