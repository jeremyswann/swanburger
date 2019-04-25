import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import Abstract from './abstract'
import Ramp from './ramp'

const WelcomeBanner = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: center;
`
const Frame = styled.div`
	display: flex;
	flex-direction: column;
`
const Decor = styled.div`
	z-index: 1;
	margin-bottom: -14px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	#abstract {
		margin-top: 4px;
	}
`
const Box = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	background-color: #eecbd4;
	border-radius: 0 4.3px 4.3px 4.3px;
	border: #eecbd4 solid 4.3px;
	max-width: 390px;
`
const Profile = styled.img`
	margin: 0.5rem;
	border-radius: 50%;
	background-color: white;
	width: 40px;
	height: 40px;
`
const Messege = styled.p`
	line-height: 1.2rem;
	font-size: 0.875rem;
	font-family: 'Roboto Slab';
	margin: 0 0.5rem 0.5rem 0;
	span {
		display: block;
		margin: 1rem 0;
	}
`

const Welcome = props => {
	const { image, text } = props
	return (
		<WelcomeBanner>
			<Frame>
				<Decor>
					<Ramp color="#EECBD4" strokeWidth="4.3" />
					<Abstract color="#EECBD4" negative="#FCF2F5" strokeWidth="4.3" />
				</Decor>
				<Box>
					<Profile src={image} alt="profile image" />
					<Messege>
						<span>Welcome,</span>
						{text}
					</Messege>
				</Box>
			</Frame>
		</WelcomeBanner>
	)
}

Welcome.propTypes = {
	image: PropTypes.string,
	text: PropTypes.string,
}

export default Welcome
