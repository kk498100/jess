import Icon from '../componenst/Icon';
import style from './index.module.scss';
import Head from 'next/head';

export default function Home() {
    return (
        <>  
            <Head>
                <meta property="og:title" content="首页" key="title" />
                <title>首页</title>
            </Head>
            <div className={ style.banner }></div>
        </>
    );
}