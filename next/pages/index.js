import Head from 'next/head'
import BannerImg from '../components/BannerImg'
import BannerBrands from '../components/BannerBrands'
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
			<BannerBrands />
			<Testimonials />
			<Social />
		</div>
	)
}

// export async function getStaticProps(ctx) {

// 	return {
// 		props: {
// 			posts
// 		}
// 	}
// }
