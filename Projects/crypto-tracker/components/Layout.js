import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/CoinListHeader'

const Layout = ({children, title = "Crypto Tracker"}) => {
    return (
        <div className="layout">
            <Head>
                <title>{title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <header className="header">
            <h1>CryptoTracker</h1>
            
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout