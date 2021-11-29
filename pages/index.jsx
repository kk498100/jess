import Icon from '../componenst/Icon';
import style from './index.module.scss';
import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

    useEffect(() => {
        const random = function random(min, max) {
            return min + ~~(Math.random() * (max - min + 1));
        };
        let heading = document.getElementById('bannerTxt_01');
        let letters = heading.textContent.split("");
        heading.textContent = "";
        letters.forEach(function (letter) {
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.animationDelay = "".concat(random(1, 1000), "ms");
            heading.append(span);
        });
    });

    return (
        <> 
            <Head>
                <meta property="og:title" content="首页" key="title" />
                <title>首页</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap" />
            </Head>
            {/* banner */}
            <div className={`${ style.banner } flex flex-col items-center justify-center`}>
                <span id="bannerTxt_01" className={`text-white ${ style.bannerTxt_01 }`}>互联网一站式服务平台</span>
                <span className={`text-white ${ style.bannerTxt_02 }`}>助你轻松进入互联网+时代</span>
                <Link href={'/case'}>
                    <a className={style.link}>
                        <div className={style.front}><Icon name="long_arr" className={`fill-white ${ style.icon }`} /></div>
                        <div className={style.back}>开发案例</div>
                    </a>
                </Link>
            </div>
            {/* 我们的服务 */}
            <div className={`container flex flex-col items-center ${ style.serve }`}>
                <h2 className={`${ style.title } wow animated bounceInDown`}>我们的服务</h2>
                <h3 className={`${ style.tip } wow animated bounceInLeft text-dustyGray`}>网站、APP小程序定制开发，您想要的都能做</h3>

                <div className="container grid grid-cols-2 mt-4 gap-y-2 lg:grid-cols-4 md:mt-28 md:gap-y-10">
                    <div className={`flex flex-col w-full items-center wow animated bounceInLeft`}>
                        <Icon name="icon_technology" className={`fill-primary ${ style.icon }`} />
                        <h4 className={style.msg}>IT技术</h4>
                    </div>
                    <div className={`flex flex-col w-full items-center wow animated bounceInUp`}>
                        <Icon name="icon_net" className={`fill-primary ${ style.icon }`} />
                        <h4 className={style.msg}>互联网+</h4>
                    </div>
                    <div className={`flex flex-col w-full items-center wow animated bounceInUp`}>
                        <Icon name="icon_data" className={`fill-primary ${ style.icon }`} />
                        <h4 className={style.msg}>大数据</h4>
                    </div>
                    <div className={`flex flex-col w-full items-center wow animated bounceInRight`}>
                        <Icon name="icon_blockchain" className={`fill-primary ${ style.icon }`} />
                        <h4 className={style.msg}>区块链</h4>
                    </div>
                </div>
            </div>
            {/* 我们的案例 */}
            <div className={`container flex flex-col items-center ${ style.case }`}>
                <h2 className={`${ style.title } wow animated bounceInDown`}>我们的案例</h2>
                <h3 className={`${ style.tip } wow animated bounceInLeft text-dustyGray`}>网站、APP、小程序、设计，一条龙定制服务</h3>
                <div className={`container grid mt-4 grid-cols-2 gap-1 lg:grid-cols-3 xl:grid-cols-4 md:gap-y-10 md:mt-16`}>
                    <div className={`w-full relative mx-auto h-28 ${ style.caseContainer }`}>
                        <Image src={'/images/index/case_01.jpg'} alt="case-1" layout="fill" />
                        <Link href={'/case'}>
                            <a className={`${ style.mask } w-full h-full flex flex-col items-center box-border`}>
                                <span className={`${ style.iconArae }`}>
                                    <Icon name="icon_computer" className={ style.iconComputer } />
                                </span>
                                <h2 className={style.caseItemTitle}>网站建设</h2>
                                <h3 className={style.caseItemTip}>为企业提供营销系统、管理系统、 服务系统等平台系统的开发搭建及网站 定制等系统配套服务。</h3>
                                <span className={style.caseItemLink}>点击了解&gt;&gt;</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`w-full relative mx-auto h-28 ${ style.caseContainer }`}>
                        <Image src={'/images/index/case_02.jpg'} alt="case-2" layout="fill" />
                        <Link href={'/case'}>
                            <a className={`${ style.mask } w-full h-full flex flex-col items-center box-border`}>
                                <span className={`${ style.iconArae }`}>
                                    <Icon name="icon_app" className={ style.iconApp } />
                                </span>
                                <h2 className={style.caseItemTitle}>APP搭建</h2>
                                <h3 className={style.caseItemTip}>提供基于IOS、ANDROID和鸿蒙OS系统 的移动APP应用设计与开发。</h3>
                                <span className={style.caseItemLink}>点击了解&gt;&gt;</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`w-full relative mx-auto h-28 ${ style.caseContainer }`}>
                        <Image src={'/images/index/case_03.jpg'} alt="case-3" layout="fill" />
                        <Link href={'/case'}>
                            <a className={`${ style.mask } w-full h-full flex flex-col items-center box-border`}>
                                <span className={`${ style.iconArae }`}>
                                    <Icon name="icon_miniprogram" className={ style.iconMiniprogram } />
                                </span>
                                <h2 className={style.caseItemTitle}>小程序</h2>
                                <h3 className={style.caseItemTip}>覆盖各商业领域的微信小程序开发、 轻量化微信服务应用等服务，满足 用户多样化需求。</h3>
                                <span className={style.caseItemLink}>点击了解&gt;&gt;</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`w-full relative mx-auto h-28 ${ style.caseContainer }`}>
                        <Image src={'/images/index/case_04.jpg'} alt="case-4" layout="fill" />
                        <Link href={'/case'}>
                            <a className={`${ style.mask } w-full h-full flex flex-col items-center box-border`}>
                                <span className={`${ style.iconArae }`}>
                                    <Icon name="icon_net" className={ style.iconNet } />
                                </span>
                                <h2 className={style.caseItemTitle}>设计</h2>
                                <h3 className={style.caseItemTip}>提供线上线下各种宣传物料设计，如商城店铺装修，产品详情页，海报，APP，网页等设计图。</h3>
                                <span className={style.caseItemLink}>点击了解&gt;&gt;</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            {/* 解决方案 */}
            <div className={`container flex flex-col items-center mb-2 md:mb-12 ${ style.solve }`}>
                <h2 className={`${ style.title } wow animated bounceInDown`}>解决方案</h2>
                <h3 className={`${ style.tip } wow animated bounceInLeft text-dustyGray`}>解决企业与互联网的最后一步，为企业发展画上完美一笔</h3>
                <div className={`flex items-center justify-between mt-4 md:mt-16`}>
                    <div className={`relative hidden lg:inline-block ${ style.imgArea }`}>
                        <Image src={'/images/index/solve.jpg'} alt="解决方案" layout="fill" />
                    </div>
                    <div className="flex flex-1 flex-col justify-center items-center md:items-start lg:ml-14">
                        <span className={style.infoTitle}>互联网科技为你解决以下痛点</span>
                        <span className={style.infoTip}>
                            我们有完整的高端技术人才团队，能够为您减少搭建平台组建团队的烦恼，提供完整的一站式服务流程，从0到1的平台搭建。让您的企业快速对接互联网，减少您各方面的资金支出。
                        </span>
                        <Link href="/case">
                            <a className={style.link}>查看详情</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}