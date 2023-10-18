import { Navbar } from '@/components'
import Head from 'next/head'
import React, { FC } from 'react'



interface Props {
    children: React.ReactNode
    title: string
    pageDescription: string
    imageFullUrl?: string
}

export const Layout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <>
            <Head>
                <title>{`Proyecto Gaby | ${title}`}</title>
                <meta name='description' content={pageDescription} />
                <meta name='og:title' content={`Proyecto Gaby | ${title}`} />
                <meta name='og:description' content={pageDescription} />
            </Head>
            <nav>
                <Navbar />
            </nav>

            <main style={{
                // margin: '80px auto',
                // maxWidth: '1440px',
                height: 'calc(100vh - 80px)',
                background: '#eff2f1'
            }}>
                {children}
            </main>

            <footer>

            </footer>
        </>
    )
}
