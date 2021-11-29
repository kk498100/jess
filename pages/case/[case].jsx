import { useRouter } from 'next/router';
import style from './index.module.scss';
import Head from 'next/head';
import Image from 'next/image';

export default function CaseDetail() {
    const query = useRouter().query;
    let title;
    switch (query.case) {
        case 'FREESTUDY':
            title = 'FREESTUDY';
            break;
        case 'Selfstudy':
            title = '自考大神';
            break;
        case 'Beginning':
            title = '新起点教育';
            break;
        case 'Listener':
            title = '倾听者';
            break;
        case 'Pet':
            title = '汇宠';
            break;
        case 'Dazzle':
            title = '炫影';
            break;
        case 'Fresh':
            title = '齐家生鲜';
            break;
        case 'Good':
            title = '好又惠';
            break;
        case 'Quick':
            title = '当日速聘';
            break;
        default:
            break;
    }
    return (
        <>
            <Head>
                <meta property="og:title" content="开发案例" key="title" />
                <title>开发案例{ title ? `- ${title}` : '' }</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap" />
            </Head>
            {/* banner */}
            <div className={style.banner}>
                <div className={style.textArea}>
                    <fieldset className={style.text}>
                        <legend align="center" className={style.title}>我们的客户案例</legend>
                        <span className={style.msg}>专注 负责 一站式服务体系 </span>
                        <span className={style.tip}>网站搭建、APP开发，小程序制作，各种平台搭建</span>
                    </fieldset>
                </div>
            </div>
            {/* main */}
            <main className={`container flex flex-col items-center box-border ${ style.caseDetail }`}>
                <h3 className={style.title}>{title}</h3>

                <div className={style.con}>
                    {   
                        // FREESTUDY
                        query.case == 'FREESTUDY' &&
                        <>
                            <Image src="/images/case_detail/freestudy/1.gif" width={825} height={1648} />
                            <Image src="/images/case_detail/freestudy/2.gif" width={825} height={1355} />
                            <Image src="/images/case_detail/freestudy/3.gif" width={825} height={1618} />
                            <Image src="/images/case_detail/freestudy/4.gif" width={825} height={1540} />
                        </>
                    }
                    {
                        // 自考大神
                        query.case == 'Selfstudy' &&
                        <>
                            <Image src="/images/case_detail/Selfstudy/1.gif" width={710} height={1659} />
                            <Image src="/images/case_detail/Selfstudy/2.gif" width={710} height={1504} />
                            <Image src="/images/case_detail/Selfstudy/3.gif" width={710} height={644} />
                            <Image src="/images/case_detail/Selfstudy/4.gif" width={710} height={2425} />
                        </>
                    }
                    {
                        // 新起点教育
                        query.case == 'Beginning' &&
                        <>
                            <Image src="/images/case_detail/Beginning/1.gif" width={825} height={1548} />
                            <Image src="/images/case_detail/Beginning/2.gif" width={825} height={1280} />
                            <Image src="/images/case_detail/Beginning/3.gif" width={825} height={1594} />
                            <Image src="/images/case_detail/Beginning/4.gif" width={825} height={1525} />
                        </>
                    }
                    {
                        // 倾听者
                        query.case == 'Listener' &&
                        <>
                            <Image src="/images/case_detail/Listener/1.gif" width={825} height={1633} />
                            <Image src="/images/case_detail/Listener/2.gif" width={825} height={1448} />
                            <Image src="/images/case_detail/Listener/3.gif" width={825} height={1341} />
                            <Image src="/images/case_detail/Listener/4.gif" width={825} height={1525} />
                        </>
                    }
                    {
                        // 汇宠
                        query.case == 'Pet' &&
                        <>
                            <Image src="/images/case_detail/Pet/1.gif" width={825} height={1511} />
                            <Image src="/images/case_detail/Pet/2.gif" width={825} height={1415} />
                            <Image src="/images/case_detail/Pet/3.gif" width={825} height={1560} />
                            <Image src="/images/case_detail/Pet/4.gif" width={825} height={1461} />
                        </>
                    }
                    {
                        // 炫影
                        query.case == 'Dazzle' &&
                        <>
                            <Image src="/images/case_detail/Dazzle/1.gif" width={825} height={1549} />
                            <Image src="/images/case_detail/Dazzle/2.gif" width={825} height={1498} />
                            <Image src="/images/case_detail/Dazzle/3.gif" width={825} height={1365} />
                            <Image src="/images/case_detail/Dazzle/4.gif" width={825} height={1535} />
                        </>
                    }
                    {
                        // 齐家生鲜
                        query.case == 'Fresh' &&
                        <>
                            <Image src="/images/case_detail/Fresh/1.gif" width={825} height={1487} />
                            <Image src="/images/case_detail/Fresh/2.gif" width={825} height={1590} />
                            <Image src="/images/case_detail/Fresh/3.gif" width={825} height={1383} />
                            <Image src="/images/case_detail/Fresh/4.gif" width={825} height={1487} />
                        </>
                    }
                    {
                        // 好又惠
                        query.case == 'Good' &&
                        <>
                            <Image src="/images/case_detail/Good/1.gif" width={825} height={1670} />
                            <Image src="/images/case_detail/Good/2.gif" width={825} height={1572} />
                            <Image src="/images/case_detail/Good/3.gif" width={825} height={1245} />
                            <Image src="/images/case_detail/Good/4.gif" width={825} height={1713} />
                        </>
                    }
                    {
                        // 当日速聘
                        query.case == 'Quick' &&
                        <>
                            <Image src="/images/case_detail/Quick/1.gif" width={825} height={1541} />
                            <Image src="/images/case_detail/Quick/2.gif" width={825} height={1528} />
                            <Image src="/images/case_detail/Quick/3.gif" width={825} height={1263} />
                            <Image src="/images/case_detail/Quick/4.gif" width={825} height={1615} />
                        </>
                    }
                </div>
            </main>
        </>
    );
}