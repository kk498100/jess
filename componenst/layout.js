import Head from 'next/head';
import Mheader from './headerComponents/Mheader';
import Script from 'next/script';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
                <meta property="og:title" content="My title" key="title" />
                <script src="/js/lib-flexable.js" charSet="utf-8" type="text/javascript" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </Head>
            {/* 手机端头部 */}
            <Mheader />
            <main className="w-full min-h-screen">{ children }</main>
            <Script src="/js/wow.js"></Script>
        </>
    );
}