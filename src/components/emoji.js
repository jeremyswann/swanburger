import React from 'react'
import PropTypes from 'prop-types'

const Emoji = ({ color }) => {
	return (
		<svg
			width="22"
			height="22"
			x="0"
			y="0"
			viewBox="0 0 22 22"
			fill="none"
			id="emoji"
		>
			<circle
				cx="11"
				cy="11"
				r="10"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17 14H5C5.66667 15.3333 7.5 17.5 11 17.5C14.5 17.5 16.3333 15.3333 17 14Z"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<circle
				cx="6.5"
				cy="7.5"
				r="0.5"
				fill={color}
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<circle
				cx="15.5"
				cy="7.5"
				r="0.5"
				fill={color}
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

Emoji.propTypes = {
	color: PropTypes.string,
}
Emoji.defaultProps = {
	color: '#D69FAD',
}
export default Emoji
