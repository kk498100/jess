import Icon from '../Icon';
import style from './mheader.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Mheader() {
    return (
        <header className="md:hidden">
            <Icon name="nav_btn" className={`fill-white ${ style.navBtn }`} />

            <aside className={`w-full h-screen ${ style.mask }`}>
                <div className="w-3/5 h-full bg-white">
                    <Link href={'/'}>
                        <a className={`relative inline-block ${ style.logo }`}><Image src="/images/common/logo.svg" alt="logo" priority layout="fill" /></a>
                    </Link>
                </div>
            </aside>
        </header>
    );
}