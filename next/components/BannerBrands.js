import Link from 'next/link'

export default function BannerBrands() {
	return (
		<div className='banner'>
			<h1>Our Brands</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<div className='banner__grid'>
				<img src='https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
				<img src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
				<img src='https://images.unsplash.com/photo-1594224457860-23bdb45f8e3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80' />
				<img src='https://images.unsplash.com/photo-1588939349575-7ab15c8bd1ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80' />
			</div>
			<Link href='/brands'>
				<button>See More</button>
			</Link>
		</div>
	)
}
