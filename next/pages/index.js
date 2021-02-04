import Head from 'next/head'
import BannerImg from '../components/BannerImg'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Social from '../components/Social'
import Testimonials from '../components/Testimonials'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Whitmire's Furniture | Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
			<Intro />
			<BannerImg />
			<Testimonials />
			<Social />
		</div>
	)
}
