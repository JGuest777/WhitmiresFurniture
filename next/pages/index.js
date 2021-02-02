import Head from 'next/head';
import Hero from '../components/Hero';
import Intro from '../components/Intro';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whitmire's Furniture | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Intro />
    </div>
  );
}
