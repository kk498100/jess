import Icon from '../Icon';
import style from './mheader.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import CustomLink from '../Link';
import { useState } from 'react';

export default function Mheader() {
    const [ showAside, controlShowAside ] = useState(false);

    const openAside = () => {
        controlShowAside(true);
    };

    const hideAside = () => {
        controlShowAside(false);
    }

    return (
        <header className={style.head}>
            <span onClick={openAside}>
                <Icon name="nav_btn" className={`fill-white ${ style.navBtn }`} />
            </span>

            <span className={`w-full h-screen ${ style.mask } ${ showAside && style.maskShow }`}></span>

            <aside className={`${ style.guid } ${ showAside && style.guidShow }`} onClick={hideAside}>
                <div className={style.guidArea}>
                    <Link href={'/'}>
                        {/* <a className={`relative inline-block ${ style.logo }`}><Image src="/images/common/logo.svg" alt="logo" priority layout="fill" /></a> */}
                        <a className={style.logo}>杰斯科技</a>
                    </Link>

                    <CustomLink href={'/'} activeClassName={style.activeLink}>
                        <a className={style.link} style={{marginTop: '1rem'}}>首页</a>
                    </CustomLink>
                    <CustomLink href={'/server'} activeClassName={style.activeLink}>
                        <a className={style.link}>服务介绍</a>
                    </CustomLink>
                    <CustomLink href={'/case'} activeClassName={style.activeLink}>
                        <a className={style.link}>开发案例</a>
                    </CustomLink>
                    <CustomLink href={'/concat'} activeClassName={style.activeLink}>
                        <a className={style.link}>联系我们</a>
                    </CustomLink>
                </div>
            </aside>
        </header>
    );
}