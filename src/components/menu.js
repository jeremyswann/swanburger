import React, { useState } from 'react'
// import onClickOutside from 'react-onclickoutside'
import { styled } from 'linaria/react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import posed from 'react-pose'

import Abstract from './abstract'
import Ramp from './ramp'

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	margin-left: 1rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		margin: 0;
	}
`
const Decor = styled.div`
	z-index: 1;
	margin-bottom: -14px;
	display: none; /** Too much decor */
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	#abstract {
		margin-top: 4px;
	}
	svg {
		display: ${props => (props.hide ? 'none' : 'flex')};
	}
`
const MenuBar = styled.ul`
	font-family: 'Roboto Slab';
	font-size: 0.875rem;
	color: #4f1b2a;
	background-color: #eecbd4;
	border-radius: 4.3px 4.3px 4.3px 4.3px;
	max-width: 960px;
	margin: 0;
	padding: 1.45rem 1.0875rem;
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: stretch;
	align-items: stretch;
	min-width: 230px;
	&[aria-hidden='true'] {
		display: none;
		@media screen and (min-width: 768px) {
			display: flex;
		}
	}
	&[aria-hidden='false'] {
		display: flex;
	}
	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		min-width: unset;
		background-color: transparent;
		padding: 0;
		border: 0;
		border-radius: 0;
	}
	&[role='menubar'] {
		li[aria-haspopup] {
			@media screen and (min-width: 768px) {
				margin-left: 1rem;
			}
		}
	}
	li {
		display: flex;
		flex-direction: row;
		margin: 0;
		margin-bottom: 0.25rem;
		flex: 1;
		border-radius: 4.3px;
		color: #fcf2f5;
		background: #4f1b2a;
		transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
		&:hover {
			background: #eecbd4;
			color: #4f1b2a;
		}
		@media screen and (min-width: 768px) {
			align-items: center;
			justify-content: center;
			margin: 0;
			&:first-child {
				margin-left: 0;
			}
		}
		&[aria-haspopup='true'] {
			position: relative;
			cursor: pointer;
			padding: 0.25rem 1rem;
			border-radius: 4.3px;
		}
		a {
			display: flex;
			flex-direction: row;
			padding: 0.25rem 1rem;
			color: inherit;
			text-decoration: none;
		}
	}
`
const MenuItem = posed.li({
	open: { opacity: 1 },
	closed: { opacity: 0 },
})
const Dropdown = styled.ul`
	margin: 0;
	margin-left: 1rem;
	list-style: none;
	display: flex;
	flex-direction: column;
	text-decoration: none;
	@media screen and (min-width: 768px) {
		position: absolute;
		top: 35px;
		left: 0;
		margin: 0;
		margin-top: 1rem;
		align-items: flex-start;
		background-color: #4f1b2a;
		border-radius: 4.3px;
	}
	&[aria-hidden='true'] {
		display: none;
	}
	&[aria-hidden='false'] {
		display: flex;
	}
`
const DropdownItem = styled.li`
	margin: 0;
	@media screen and (min-width: 768px) {
		margin-bottom: 0.5rem;
		min-width: 130px;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
`

const Menu = props => {
	const [isExpanded, setIsExpanded] = useState(false)
	const dropDown = () => setIsExpanded(!isExpanded)
	// Menu.handleClickOutside = () => props.setIsOpen(props.isOpen)
	return (
		<Nav id="a11y-menu" role="navigation" aria-label="Main menu">
			<Decor hide={!props.isOpen}>
				<Ramp color="#EECBD4" strokeWidth="4.3" />
				<Abstract color="#EECBD4" negative="#FCF2F5" strokeWidth="4.3" />
			</Decor>
			<MenuBar role="menubar" aria-hidden={!props.isOpen}>
				<MenuItem role="menuitem" aria-haspopup="false">
					<Link to="/">Home</Link>
				</MenuItem>
				<MenuItem
					role="menuitem"
					aria-haspopup="true"
					onClick={dropDown}
					onKeyDown={dropDown}
				>
					About
					<Dropdown role="menu" aria-hidden={!isExpanded} aria-label="submenu">
						<DropdownItem role="menuitem">
							<Link to="/about/#who-we-are" tabIndex="-1">
								Who we are
							</Link>
						</DropdownItem>
						<DropdownItem role="menuitem">
							<Link to="/about/#what-we-do" tabIndex="-1">
								What we do
							</Link>
						</DropdownItem>
						<DropdownItem role="menuitem">
							<Link to="/about/#why" tabIndex="-1">
								Why
							</Link>
						</DropdownItem>
					</Dropdown>
				</MenuItem>
				<MenuItem role="menuitem" aria-haspopup="false">
					<Link to="/blog">Blog</Link>
				</MenuItem>
				<MenuItem role="menuitem" aria-haspopup="false">
					<Link to="/contact">Contact</Link>
				</MenuItem>
			</MenuBar>
		</Nav>
	)
}

Menu.propTypes = {
	siteTitle: PropTypes.string,
	isOpen: PropTypes.bool,
	toggle: PropTypes.func,
	setIsOpen: PropTypes.func,
}
Menu.defaultProps = {
	siteTitle: ``,
	isOpen: false,
	toggle: () => {},
	setIsOpen: () => {},
}

// const clickOutsideConfig = {
// 	handleClickOutside: () => Menu.handleClickOutside,
// }

// export default onClickOutside(Menu, clickOutsideConfig)

export default Menu
