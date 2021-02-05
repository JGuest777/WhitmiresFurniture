import { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import Link from 'next/link'
// import SubMenu from './SubMenu';
import Menu from './Menu'

export default function Header({ toggleOverlay, setToggleOverlay }) {
	const [toggleMenu, setToggleMenu] = useState(false)

	const transitions = useTransition(toggleMenu, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 200 }
	})

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
		setToggleOverlay(!toggleOverlay)
	}

	return (
		<header className='header'>
			<div className='header__logo'>
				<Link href='/'>
					<a>
						<img src={require('../public/images/logo.png?webp')} />
					</a>
				</Link>
			</div>
			<nav>
				{/* Mobile Icons & Burger Menu */}
				{/* <SubMenu /> */}
				<button
					onClick={handleToggleMenu}
					className={`header__burger ${toggleMenu && 'open'} hide-desktop`}
				>
					<div />
					<div />
					<div />
				</button>

				{/* Desktop Links */}
				<div className='header__links hide-mobile'>
					<Link href='/'>
						<a>Home</a>
					</Link>
					<Link href='/about'>
						<a>Our Team</a>
					</Link>
					<Link href='/brands'>
						<a>Our Brands</a>
					</Link>
					<Link href='/contact'>
						<a>Contact Us</a>
					</Link>
				</div>
			</nav>
			{transitions.map(
				({ item, key, props }) =>
					item && (
						<animated.div key={key} style={props} className='header__menu'>
							<Menu
								toggleMenu={toggleMenu}
								setToggleMenu={setToggleMenu}
								setToggleOverlay={setToggleOverlay}
							/>
						</animated.div>
					)
			)}
		</header>
	)
}
