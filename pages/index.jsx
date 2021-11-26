import Icon from '../componenst/Icon';
import style from './index.module.scss';
import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';

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
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap" />
            </Head>
            {/* banner */}
            <div className={`${ style.banner } flex flex-col items-center justify-center`}>
                <text id="bannerTxt_01" className={`text-white ${ style.bannerTxt_01 }`}>互联网一站式服务平台</text>
                <text className={`text-white ${ style.bannerTxt_02 }`}>助你轻松进入互联网+时代</text>
                <Link href={'/about'}>
                    <a className={style.link}>
                        <div className={style.front}><Icon name="long_arr" className={`fill-white ${ style.icon }`} /></div>
                        <div className={style.back}>关于我们</div>
                    </a>
                </Link>
            </div>
            {/* 我们的服务 */}
            <div className={`container flex flex-col items-center ${ style.serve }`}>
                <h2 className={`${ style.title } wow animated bounceInDown`}>我们的服务</h2>
                <h3 className={`${ style.tip } wow animated bounceInLeft text-dustyGray`}>网站、APP小程序定制开发，您想要的都能做</h3>

                <div className="container grid grid-cols-2 mt-3">123</div>
            </div>
        </>
    );
}