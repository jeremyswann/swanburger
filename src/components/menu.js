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
	}
	&[aria-hidden='false'] {
		display: flex;
	}
	li {
		margin: 0;
		margin-bottom: 0.25rem;
		flex: 1;
		color: #fcf2f5;
		background-color: #4f1b2a;
		padding: 0.25rem 1rem;
		border-radius: 4.3px;
		display: flex;
		flex-direction: column;
		flex: 1;
		a {
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
	&[aria-hidden='true'] {
		display: none;
	}
	&[aria-hidden='false'] {
		display: flex;
	}
`
const DropdownItem = styled.li`
	margin: 0;
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
