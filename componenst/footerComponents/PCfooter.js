import style from './pcfooter.module.scss';
import CustomLink from '../Link';

export default function PCfooter() {
    return (
        <footer className={`w-full hidden md:block ${ style.footer }`}>
            <div className={`container flex flex-col ${ style.main }`}>
                <div className="flex items-center justify-center flex-nowrap">
                    <CustomLink href={'/'} activeClassName={style.activeLink}>
                        <a className={style.link}>首页</a>
                    </CustomLink>
                    <i className={style.line} />
                    <CustomLink href={'/server'} activeClassName={style.activeLink}>
                        <a className={style.link}>服务介绍</a>
                    </CustomLink>
                    <i className={style.line} />
                    <CustomLink href={'/case'} activeClassName={style.activeLink}>
                        <a className={style.link}>开发案例</a>
                    </CustomLink>
                    {/* <i className={style.line} />
                    <CustomLink href={'/about'} activeClassName={style.activeLink}>
                        <a className={style.link}>关于我们</a>
                    </CustomLink> */}
                </div>

                <div className={style.copy}>COPYRIGHT©2021 深圳市杰斯科技有限公司</div>
            </div> 
        </footer>
    );
}