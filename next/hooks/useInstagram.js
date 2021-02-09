import { useState, useEffect } from 'react'

const url = `http://localhost:3000/api/getposts`

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
