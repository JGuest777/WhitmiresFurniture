import useInstagram from '../hooks/useInstagram'

export default function Social({ apiUrl }) {
	const gramz = useInstagram({ apiUrl })

	return (
		<div className='social'>
			<h1>follow us</h1>
			<a href='https://www.instagram.com/whitmiresfurniture/' target='_blank'>
				@whitmiresfurniture
			</a>
			{/* 4 col imgs */}
			<div className='social__grid'>
				{gramz.map((gram) => (
					<a href={gram.url} target='_blank' key={gram.id}>
						<img src={gram.thumb} alt={gram.caption} loading='lazy' />
					</a>
				))}
			</div>
		</div>
	)
}
