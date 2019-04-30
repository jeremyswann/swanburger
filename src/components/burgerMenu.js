import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'
import { TimelineMax, Linear, Power2 } from 'gsap'
import { TweenMax } from 'gsap/TweenMaxBase'
import DrawSVGPlugin from '../gasp-bonus/DrawSVGPlugin'

const plugins = [Linear, Power2, DrawSVGPlugin]

const Button = styled.button`
	display: flex;
	padding: 0;
	margin: 0;
	background: transparent;
	border: none;
	&:focus {
		outline-color: #d69fad;
		outline-offset: 4px;
		outline-width: 1px;
		outline-style: solid;
	}
`

class BurgerMenu extends Component {
	constructor(props) {
		super(props)
		this.plugins
		this.button = createRef
		this.svgNode = createRef
		this.filling = createRef
		this.bunTop = createRef
		this.bunBottom = createRef
	}

	componentDidMount() {
		this.tl = new TimelineMax({ paused: false })
		// Stop webpack from tree shaking the plugin
		this.tl !== undefined
			? (this.plugins = require('../gasp-bonus/DrawSVGPlugin'))
			: (this.plugins = '')
		this.tw = TweenMax
		this.tw.set(this.filling, {
			drawSVG: '100%',
		})
		this.tw.set(this.bunTop, {
			drawSVG: '100% 100%',
		})
		this.tw.set(this.bunBottom, {
			drawSVG: '100% 100%',
		})
		this.tl.timeScale(1)
		this.tl
			.to(this.bunTop, 0.4, {
				drawSVG: '100%',
				ease: Linear.easeIn,
			})
			.to(
				this.bunBottom,
				0.4,
				{
					drawSVG: '100%',
					ease: Linear.easeIn,
				},
				'-=0.4'
			)
	}
	render() {
		const { isOpen, toggle } = this.props
		return (
			<Button
				className="burger-menu"
				aria-label="menu-button"
				aria-pressed={isOpen}
				onClick={e => {
					toggle(e)
					!isOpen ? this.tl.reverse() : this.tl.play()
				}}
				onKeyDown={toggle}
				ref={button => (this.button = button)}
			>
				<svg
					viewBox="0 0 38 38"
					fill="none"
					width="34"
					height="34"
					ref={svg => (this.svgNode = svg)}
					className="svg-container"
					id="burger-menu"
				>
					<path
						d="M3 8C3 8 9 3 19 3C29 3 35 8 35 8"
						stroke="#D69FAD"
						strokeWidth="4.3"
						strokeLinecap="round"
						strokeLinejoin="round"
						ref={path => (this.bunTop = path)}
						className="path-top"
					/>
					<path
						d="M5 19.5H33"
						stroke="#BD687F"
						strokeWidth="4.3"
						strokeLinecap="round"
						strokeLinejoin="round"
						ref={path => (this.filling = path)}
						className="path-filling"
					/>
					<path
						d="M3 31C3 31 9 35 19 35C29 35 35 31 35 31"
						stroke="#D69FAD"
						strokeWidth="4.3"
						strokeLinecap="round"
						strokeLinejoin="round"
						ref={path => (this.bunBottom = path)}
						className="path-bottom"
					/>
				</svg>
			</Button>
		)
	}
}

BurgerMenu.propTypes = {
	toggle: PropTypes.func,
	isOpen: PropTypes.bool,
}

BurgerMenu.defaultProps = {
	isOpen: false,
	toggle: () => {},
}

export default BurgerMenu
