import { useState, useEffect } from 'react'

const url = `https://whitmires-furniture.vercel.app/api/getposts`

export default function useInstagram() {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setPosts(data)
			})
	}, [])
	return posts
}
