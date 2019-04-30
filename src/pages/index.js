import React from 'react'

import Layout from '../components/layout'
import Meta from '../components/meta'
import Welcome from '../components/welcome'
import Reply from '../components/reply'
import Feed from '../components/feed'

import ProfileImage from '../images/profile_image_zoom.png'

const IndexPage = () => (
	<Layout>
		<Meta title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<Welcome
			image={ProfileImage}
			text={`my name is Jeremy Swanborough and I’m a software engineer. I build websites and apps using modern web development architecture. I’d love to hear about your upcoming project. 🍔`}
		/>
		<Reply />
		<Feed />
	</Layout>
)

export default IndexPage
