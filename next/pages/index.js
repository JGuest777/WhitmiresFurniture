import Head from 'next/head'
import BannerImg from '../components/BannerImg'
import BannerBrands from '../components/BannerBrands'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Social from '../components/Social'
import Testimonials from '../components/Testimonials'
import absoluteUrl from 'next-absolute-url'

export default function Home({ apiUrl }) {
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
			<Social apiUrl={apiUrl} />
		</div>
	)
}

// export async function getStaticProps(ctx) {

// 	return {
// 		props: {

// 		}
// 	}
// }

export async function getServerSideProps({ req }) {
	const { protocol, host } = absoluteUrl(req)
	const apiUrl = `${protocol}//${host}`
	return {
		props: {
			apiUrl
		}
	}
}
