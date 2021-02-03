import Head from 'next/head';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Social from '../components/Social';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whitmire's Furniture | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Intro />
      <Social />
    </div>
  );
}
