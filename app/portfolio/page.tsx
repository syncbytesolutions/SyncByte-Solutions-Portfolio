import { Portfolio } from '@/components/sections/portfolio'

export const metadata = {
    title: 'Portfolio | SyncByte Solutions',
    description: 'Browse our portfolio of web and mobile applications built for clients across various industries.',
}

export default function PortfolioPage() {
    return (
        <main>
            <Portfolio />
        </main>
    )
}