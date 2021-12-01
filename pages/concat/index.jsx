import style from './index.module.scss';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Concat() {

    useEffect(() => {
        const map = new BMapGL.Map('map');
        const point = new BMapGL.Point(113.866359, 22.578397);
        map.centerAndZoom(point, 19);
        map.enableScrollWheelZoom(true);
        map.setHeading(64.5);
        map.setTilt(73);
        const navi3DCtrl = new BMapGL.NavigationControl3D();  // 添加3D控件
        map.addControl(navi3DCtrl);
        const marker = new BMapGL.Marker(new BMapGL.Point(113.866359, 22.578397));
        map.addOverlay(marker);
        const location = new BMapGL.LocationControl();
        map.addOverlay(location);
    });

    return (
        <>
            <Head>
                <meta property="og:title" content="联系我们" key="title" />
                <title>联系我们</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap" />
                <script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=T4nA9IPvzu3mPQvjPBEIGYlZjygqRQvc"></script>
            </Head>
            {/* banner */}
            <div className={style.banner}>
                <div className={style.textArea}>
                    <fieldset className={style.text}>
                        <legend align="center" className={style.title}>我们的联系方式</legend>
                        <span className={style.msg}>信息链接你我，赋能未来</span>
                        <span className={style.tip}>网服务站搭建、APP开发，小程序制作，各种平台搭建</span>
                    </fieldset>
                </div>
            </div>
            {/* 联系我们 */}
            <div className={style.concatBg}>
                <div className={style.concat}>
                    <h2 className={`${ style.title } wow animated bounceInDown`}>联系我们</h2>

                    <div className={style.con}>
                        <span className={style.item}>电话：13871538757</span>
                        <span className={style.item}>邮箱：kk498100@163.com</span>
                        <span className={style.item}>地址：深圳市宝安区西乡大道2007号宗泰未来城</span>
                    </div>
                </div>
            </div>
            {/* 百度地图 */}
            <div id="map" className={style.map} />
        </>
    );
}