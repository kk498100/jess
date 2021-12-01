import style from './pcheader.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import CustomLink from '../Link';

export default function PCheader() {
    return (
        <header className={style.head}>
            <div className={`container flex justify-between items-center ${ style.header }`}>
                <Link href="/">
                    <a className="flex-none"><Image src="/images/common/logo.svg" alt="logo" priority width={220} height={44} /></a>
                </Link>

                <nav className="flex items-center flex-nowrap flex-1 justify-end" style={{justifyContent: 'flex-end'}}>
                    <CustomLink href={'/'} activeClassName={style.activeLink}>
                        <a className={`${ style.link } mr-1 lg:mr-3`}>首页</a>
                    </CustomLink>
                    <CustomLink href={'/server'} activeClassName={style.activeLink}>
                        <a className={`${ style.link } mr-1 lg:mr-3`}>服务介绍</a>
                    </CustomLink>
                    <CustomLink href={'/case'} activeClassName={style.activeLink}>
                        <a className={`${ style.link }`}>开发案例</a>
                    </CustomLink>
                    <CustomLink href={'/concat'} activeClassName={style.activeLink}>
                        <a className={`${ style.link }`}>联系我们</a>
                    </CustomLink>
                </nav>
            </div>
        </header>
    );
}