import '../styles/globals.css';
import Layout from '../componenst/layout';
import '../public/css/animate.min.css';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
