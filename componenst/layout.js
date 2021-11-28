import Head from 'next/head';
import Mheader from './headerComponents/Mheader';
import PCheader from './headerComponents/PCheader';
import Mfooter from './footerComponents/Mfooter';
import PCfooter from './footerComponents/PCfooter';
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
            {/* pc端头部 */}
            <PCheader />
            <main className="w-full min-h-screen">{ children }</main>
            {/* m端底部 */}
            <Mfooter />
            {/* pc端底部 */}
            <PCfooter />
            <Script src="/js/wow.js"></Script>
        </>
    );
}