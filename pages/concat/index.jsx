import style from './index.module.scss';
import Head from 'next/head';
import Map from 'react-bmapgl/Map';
import Marker from 'react-bmapgl/Overlay/Marker';
import NavigationControl from 'react-bmapgl/Control/NavigationControl';
import ZoomControl from 'react-bmapgl/Control/ZoomControl';

export default function Concat() {
    return (
        <>
            <Head>
                <meta property="og:title" content="联系我们" key="title" />
                <title>联系我们</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap" />
                <script src="https://api.map.baidu.com/api?v=3.0&&type=webgl&ak=T4nA9IPvzu3mPQvjPBEIGYlZjygqRQvc" preload="true" />
            </Head>
            {/* banner */}
            <div className={style.banner}>
                <div className={style.textArea}>
                    <fieldset className={style.text}>
                        <legend align="center" className={style.title}>联系方式</legend>
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
            <Map center={{lng: 113.866359, lat: 22.578397}} zoom="19" className={style.map} tilt={73} heading={64.5} enableScrollWheelZoom={true} style={{height: '450px'}} >
                {/* 标记 */}
                <Marker position={{lng: 113.866359, lat: 22.578397}} autoViewport={true} enableDragging={true} />
                {/* NavigationControl 3D控件 */}
                <NavigationControl />
                {/* ZoomControl 缩放控件 */}
                <ZoomControl />
            </Map>
        </>
    );
}