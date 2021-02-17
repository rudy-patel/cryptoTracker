import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


const Layout = ({children, title = "CryptoTracker"}) => {
    return (
        <div className="layout">
            <Head>
                <title>{title}</title>
                <link rel='icon' href='/bitcoinLogo.jpg' />
            </Head>
            <header className="header">
            <h1>CryptoTracker</h1>
            </header>         
          <main>{children}</main>
        </div>
    )
}

export default Layout