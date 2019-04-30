import React from 'react'
import PropTypes from 'prop-types'

const Ramp = ({ color, strokeWidth }) => {
	return (
		<svg
			width="48.3"
			height="35.3"
			x="0"
			y="0"
			viewBox="0 0 48.3 35.3"
			fill="none"
			id="ramp"
		>
			<path
				d="M2.15,2.15v31h44C27.75,33.15,5.32,13.32,2.15,2.15z"
				fill={color}
				stroke={color}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

Ramp.propTypes = {
	color: PropTypes.string,
	strokeWidth: PropTypes.string,
}
Ramp.defaultProps = {
	color: '#EECBD4',
	strokeWidth: '4.3',
}
export default Ramp
