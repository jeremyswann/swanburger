/* eslint "react/jsx-pascal-case": "off" */
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import Welcome from '../components/welcome'
import Reply from '../components/reply'

import ProfileImage from '../images/profile_image_zoom.png'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<Welcome
			image={ProfileImage}
			text={`my name is Jeremy Swanborough and I’m a software engineer. I build websites and apps using modern web development architecture. I’d love to hear about your upcoming project. 🍔`}
		/>
		<Reply />
	</Layout>
)

export default IndexPage
