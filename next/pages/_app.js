import Head from 'next/head';
import Layout from '../layout/Layout';
import '../lib/fontAwesome';
import '../styles/style.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Whitmire's Furniture</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
