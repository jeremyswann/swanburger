import React from 'react'
import PropTypes from 'prop-types'

const Abstract = ({ color, negative, strokeWidth }) => (
	<svg width="94" height="41" viewBox="0 0 94 41" fill="none" id="abstract">
		<line
			x1="9"
			y1="33.9594"
			x2="20.9594"
			y2="22"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="11"
			y1="19.9594"
			x2="19.9594"
			y2="11"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="3"
			y1="27.9594"
			x2="4.95944"
			y2="26"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="42"
			y1="13.0406"
			x2="19.0406"
			y2="36"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="53.0112"
			y1="14.0293"
			x2="31.0518"
			y2="35.9888"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="67"
			y1="6.04056"
			x2="40.0406"
			y2="33"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="65.0112"
			y1="14.0293"
			x2="41.0518"
			y2="37.9888"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="72"
			y1="7.04056"
			x2="70.0406"
			y2="9"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="52"
			y1="3.04056"
			x2="50.0406"
			y2="5"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="67"
			y1="6.04056"
			x2="48.0406"
			y2="25"
			stroke={negative}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="79"
			y1="6.04056"
			x2="52.0406"
			y2="33"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="87"
			y1="4.04056"
			x2="59.0406"
			y2="32"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="79"
			y1="6.04056"
			x2="66.0406"
			y2="19"
			stroke={negative}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="91"
			y1="6.04056"
			x2="60.0406"
			y2="37"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="83"
			y1="20.0406"
			x2="70.0406"
			y2="33"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="91"
			y1="6.04056"
			x2="62.0406"
			y2="35"
			stroke={negative}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M38 23L30.0406 31"
			stroke={negative}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M38 23L30.0406 31"
			stroke={negative}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="25"
			y1="36.0406"
			x2="23.0406"
			y2="38"
			stroke={negative}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="25"
			y1="36.0406"
			x2="23.0406"
			y2="38"
			stroke={negative}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="23"
			y1="26.0406"
			x2="18.0406"
			y2="31"
			stroke={negative}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="23"
			y1="26.0406"
			x2="18.0406"
			y2="31"
			stroke={negative}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="11"
			y1="26.0406"
			x2="7.04056"
			y2="30"
			stroke={negative}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line
			x1="11"
			y1="26.0406"
			x2="7.04056"
			y2="30"
			stroke={negative}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

Abstract.propTypes = {
	color: PropTypes.string,
	negative: PropTypes.string,
	strokeWidth: PropTypes.string,
}

export default Abstract