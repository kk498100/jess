import Icon from '../Icon';
import style from './mheader.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import CustomLink from '../Link';

export default function Mheader() {
    return (
        <header className="md:hidden">
            <Icon name="nav_btn" className={`fill-white ${ style.navBtn }`} />

            <aside className={`w-full h-screen ${ style.mask }`}>
                <div className={style.guidArea}>
                    <Link href={'/'}>
                        <a className={`relative inline-block ${ style.logo }`}><Image src="/images/common/logo.svg" alt="logo" priority layout="fill" /></a>
                    </Link>

                    <CustomLink href={'/'} activeClassName={style.activeLink}>
                        <a className={`mt-2 ${ style.link }`}>首页</a>
                    </CustomLink>
                    <CustomLink href={'/server'} activeClassName={style.activeLink}>
                        <a className={`mt-1 ${ style.link }`}>服务介绍</a>
                    </CustomLink>
                    <CustomLink href={'/case'} activeClassName={style.activeLink}>
                        <a className={`mt-1 ${ style.link }`}>开发案例</a>
                    </CustomLink>
                    <CustomLink href={'/about'} activeClassName={style.activeLink}>
                        <a className={`mt-1 ${ style.link }`}>关于我们</a>
                    </CustomLink>
                </div>
            </aside>
        </header>
    );
}