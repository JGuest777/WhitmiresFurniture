import Grid from '@material-ui/core/Grid'

export default function Team() {
	return (
		<div className='team'>
			<h1>Our Team</h1>
			<Grid container spacing={5}>
				{[...Array(6).keys()].map((item, i) => (
					<Grid key={i} item xs={12} sm={6} md={4}>
						<img
							src='https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
							alt='Mark'
						/>

						<h4>Mark Whitmire</h4>
						<p>
							Mark Whitmire has been full time here at Whitmire’s Furniture
							since 1984. When he isn’t working, he can be found in the woods or
							on the water. A true Outdoorsman, he is our resident Hi-Tech
							Redneck.
						</p>
					</Grid>
				))}
			</Grid>
		</div>
	)
}
