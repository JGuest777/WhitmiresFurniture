import { useEffect, useRef } from 'react'
import Link from 'next/link'

// TODO: Very hacky ref solution, refactor!
// Track multiple refs (links) during click event

export default function Menu({ toggleMenu, setToggleMenu, setToggleOverlay }) {
	const linkRef = useRef()
	const menuRef = useRef()

	useEffect(() => {
		if (!toggleMenu) return
		function handleCLick(e) {
			if (
				(menuRef.current && !menuRef.current.contains(e.target)) ||
				linkRef.current.contains(e.target) ||
				!linkRef.current.contains(e.target)
			) {
				setToggleMenu(false)
				setToggleOverlay(false)
			}
		}
		window.addEventListener('click', handleCLick)
		return () => window.removeEventListener('click', handleCLick)
	}, [toggleMenu])

	return (
		<div ref={menuRef}>
			<Link href='/'>
				<a ref={linkRef}>Home</a>
			</Link>
			<Link href='/about'>
				<a ref={linkRef}>Our Team</a>
			</Link>
			<Link href='/brands'>
				<a ref={linkRef}>Our Brands</a>
			</Link>
			<Link href='/contact'>
				<a ref={linkRef}>Contact Us</a>
			</Link>
		</div>
	)
}
