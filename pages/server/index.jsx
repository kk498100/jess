import style from './index.module.scss';
import Head from 'next/head';
import Icon from '../../componenst/Icon';
import Image from 'next/image';

export default function Server() {
    return (
        <>
            <Head>
                <meta property="og:title" content="服务我介绍" key="title" />
                <title>服务介绍</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap" />
            </Head>
            {/* banner */}
            <div className={style.banner}>
                <div className={style.textArea}>
                    <fieldset className={style.text}>
                        <legend align="center" className={style.title}>我们的服务介绍</legend>
                        <span className={style.msg}>专注 负责 一站式服务体系 </span>
                        <span className={style.tip}>网站搭建、APP开发，小程序制作，各种平台搭建</span>
                    </fieldset>
                </div>
            </div>
            {/* 我们的优势 */}
            <div className={`container flex flex-col items-center ${ style.advantage }`}>
                <h2 className={`${ style.title } wow animated bounceInDown`}>我们的优势</h2>
                <h3 className={`${ style.tip } wow animated bounceInLeft text-dustyGray`}>匠心打造至臻品 实力打造口碑</h3>

                <div className={style.con}>
                    <div className="w-full flex items-center flex-col wow animated bounceInLeft box-border px-2">
                        <div className={style.iconArea}>
                            <Icon name="icon_safe" className={style.iconSafe} />
                        </div>
                        <span className={style.itemTitle}>系统安全</span>
                        <span className={style.itemMsg}>封闭性研发，保证信息独立性；项目完成后封闭性确保客户资料安全性</span>
                    </div>
                    <div className="w-full flex items-center flex-col wow animated bounceInUp box-border px-2">
                        <div className={style.iconArea}>
                            <Icon name="icon_server" className={style.iconServer} />
                        </div>
                        <span className={style.itemTitle}>服务保障</span>
                        <span className={style.itemMsg}>前期开发完成后，后期保证客户平台稳定，定期回访解决问题</span>
                    </div>
                    <div className="w-full flex items-center flex-col wow animated bounceInUp box-border px-2">
                        <div className={style.iconArea}>
                            <Icon name="icon_quality" className={style.iconQuality} />
                        </div>
                        <span className={style.itemTitle}>质量保优</span>
                        <span className={style.itemMsg}>行业内顶尖研发团队，团队成员，均来自各大互联网头部企业</span>
                    </div>
                    <div className="w-full flex items-center flex-col wow animated bounceInRight box-border px-2">
                        <div className={style.iconArea}>
                            <Icon name="icon_prod" className={style.iconProd} />
                        </div>
                        <span className={style.itemTitle}>一站式</span>
                        <span className={style.itemMsg}>需求洽谈、需求分析、产品架构、UE原型设计、UI视觉设计、封闭性开发。</span>
                    </div>
                </div>
            </div>
            {/* 服务项目 */}
            <div className={`container flex flex-col items-center ${ style.program }`}>
                <h2 className={`${ style.title } wow animated bounceInDown`}>服务项目</h2>
                <h3 className={`${ style.tip } wow animated bounceInLeft text-dustyGray`}>网站、APP小程序定制开发，您想要的都能做</h3>

                <div className={style.con}>
                    <div className="w-full flex flex-col items-center box-border px-3 relative wow animated bounceInLeft">
                        <Image src="/images/serve/program_01.jpg" alt="program-1" className="flex-none" width={518} height={360} />
                        <span className={style.itemTitle}>网站建设</span>
                        <span className={style.itemMsg}>为企业提供营销系统、管理系统、 服务系统等平台系统的开发搭建及网站 定制等系统配套服务。</span>
                    </div>
                    <div className="w-full flex flex-col items-center box-border px-3 relative wow animated bounceInLeft">
                        <Image src="/images/serve/program_02.jpg" alt="program-2" className="flex-none" width={518} height={360} />
                        <span className={style.itemTitle}>APP搭建</span>
                        <span className={style.itemMsg}>提供基于IOS、ANDROID和鸿蒙OS系统 的移动APP应用设计与开发。</span>
                    </div>
                    <div className="w-full flex flex-col items-center box-border px-3 relative wow animated bounceInLeft">
                        <Image src="/images/serve/program_03.jpg" alt="program-3" className="flex-none" width={518} height={360} />
                        <span className={style.itemTitle}>小程序</span>
                        <span className={style.itemMsg}>覆盖各商业领域的微信小程序开发、 轻量化微信服务应用等服务，满足 用户多样化需求。</span>
                    </div>
                </div>
            </div>
            {/* 技术服务 */}
            <div className={`container flex flex-col items-center ${ style.server }`}>
                <h2 className={`${ style.title } wow animated bounceInDown`}>技术服务</h2>
                <h3 className={`${ style.tip } wow animated bounceInLeft text-dustyGray`}>IT技术、互联网+、大数据、区块链</h3>

                <div className={`${ style.con } container`}>
                    <figure>
                        <Image src="/images/serve/server_01.jpg" alt="server-1" width={936} height={440} />
                    </figure>
                    <figure>
                        <Image src="/images/serve/server_03.jpg" alt="server-3" width={428} height={446} />
                    </figure>
                    <figure>
                        <Image src="/images/serve/server_02.jpg" alt="server-2" width={662} height={354} />
                    </figure>
                    <figure>
                        <Image src="/images/serve/server_04.jpg" alt="server-4" width={480} height={446} />
                    </figure>
                    <figure>
                        <Image src="/images/serve/server_05.jpg" alt="server-5" width={663} height={534} />
                    </figure>
                </div>
            </div>
        </>
    );
}