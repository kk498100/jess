import style from './index.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Case() {
    return (
        <>
            <Head>
                <meta property="og:title" content="开发案例" key="title" />
                <title>开发案例</title>
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
            {/* 案例 */}
            <div className={`container flex flex-col items-center ${ style.case }`}>
                <h2 className={`${ style.title } wow animated bounceInDown`}>成功案例</h2>
                <h3 className={`${ style.tip } wow animated bounceInLeft text-dustyGray`}>专注负责一站式服务体系</h3>

                <div className={`container ${ style.con } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-2 lg:gap-x-12 lg:gap-y-7`}>
                    <div className="w-full flex flex-col wow animated bounceInLeft">
                        <Link href="/case/FREESTUDY">
                            <a className={style.linkArea} title="FREESTUDY">
                                <Image src="/images/case/case_01.jpg" alt="case-1" width={440} height={368} />
                                <div className={style.mask}>FREESTUDY</div>
                            </a>
                        </Link>
                        <h3 className={style.itemTitle}>教育类</h3>
                        <h4 className={style.itemMsg}>FREESTUDY</h4>
                    </div>
                    <div className="w-full flex flex-col wow animated rotateIn">
                        <Link href="/case/Selfstudy">
                            <a className={style.linkArea} title="自考大神">
                                <Image src="/images/case/case_02.jpg" alt="case-2" width={440} height={368} />
                                <div className={style.mask}>自考大神</div>
                            </a>
                        </Link>
                        <h3 className={style.itemTitle}>教育类</h3>
                        <h4 className={style.itemMsg}>自考大神</h4>
                    </div>
                    <div className="w-full flex flex-col wow animated flipInX">
                        <Link href="/case/Beginning">
                            <a className={style.linkArea} title="新起点教育">
                                <Image src="/images/case/case_03.jpg" alt="case-3" width={440} height={368} />
                                <div className={style.mask}>新起点教育</div>
                            </a>
                        </Link>
                        <h3 className={style.itemTitle}>教育类</h3>
                        <h4 className={style.itemMsg}>新起点教育</h4>
                    </div>
                    <div className="w-full flex flex-col wow animated flipInY">
                        <Link href="/case/Listener">
                            <a className={style.linkArea} title="倾听者">
                                <Image src="/images/case/case_04.jpg" alt="case-4" width={440} height={368} />
                                <div className={style.mask}>倾听者</div>
                            </a>
                        </Link>
                        <h3 className={style.itemTitle}>社交类</h3>
                        <h4 className={style.itemMsg}>倾听者</h4>
                    </div>
                    <div className="w-full flex flex-col wow animated rotateIn">
                        <Link href="/case/Pet">
                            <a className={style.linkArea} title="汇宠">
                                <Image src="/images/case/case_05.jpg" alt="case-5" width={440} height={368} />
                                <div className={style.mask}>汇宠</div>
                            </a>
                        </Link>
                        <h3 className={style.itemTitle}>社交类</h3>
                        <h4 className={style.itemMsg}>汇宠</h4>
                    </div>
                    <div className="w-full flex flex-col wow animated fadeInLeft">
                        <Link href="/case/Dazzle">
                            <a className={style.linkArea} title="炫影">
                                <Image src="/images/case/case_06.jpg" alt="case-6" width={440} height={368} />
                                <div className={style.mask}>炫影</div>
                            </a>
                        </Link>
                        <h3 className={style.itemTitle}>直播类</h3>
                        <h4 className={style.itemMsg}>炫影</h4>
                    </div>
                    <div className="w-full flex flex-col wow animated fadeInLeftBig">
                        <Link href="/case/Fresh">
                            <a className={style.linkArea} title="齐家生鲜">
                                <Image src="/images/case/case_07.jpg" alt="case-7" width={440} height={368} />
                                <div className={style.mask}>齐家生鲜</div>
                            </a>
                        </Link>
                        <h3 className={style.itemTitle}>生鲜配送类</h3>
                        <h4 className={style.itemMsg}>齐家生鲜</h4>
                    </div>
                    <div className="w-full flex flex-col wow animated bounceInUp">
                        <Link href="/case/Good">
                            <a className={style.linkArea} title="好又惠">
                                <Image src="/images/case/case_08.jpg" alt="case-8" width={440} height={368} />
                                <div className={style.mask}>好又惠</div>
                            </a>
                        </Link>
                        <h3 className={style.itemTitle}>电商类</h3>
                        <h4 className={style.itemMsg}>好又惠</h4>
                    </div>
                    <div className="w-full flex flex-col wow animated fadeInRightBig">
                        <Link href="/case/Quick">
                            <a className={style.linkArea} title="当日速聘">
                                <Image src="/images/case/case_09.jpg" alt="case-9" width={440} height={368} />
                                <div className={style.mask}>当日速聘</div>
                            </a>
                        </Link>
                        <h3 className={style.itemTitle}>生活服务类</h3>
                        <h4 className={style.itemMsg}>当日速聘</h4>
                    </div>
                </div>
            </div>
        </>
    );
}