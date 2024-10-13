import '@/styles/globals.css'
import MainLayout from '@/components/layouts/main'
import Head from 'next/head'

export default function App({Component , pageProps}) {
    return <MainLayout>
        <Head>
            <meta 
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta 
                name="apple-mobile-web-app-status-bar-style"
                content="#ef394e"
            />
        </Head>
        <Component {...pageProps}/>
    </MainLayout>
}
