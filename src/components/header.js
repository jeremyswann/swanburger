import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { styled } from 'linaria/react'

import BurgerIcon from './burgerIcon'
import BurgerMenu from './burgerMenu'
import Menu from './menu'

const Header = styled.header`
	display: flex;
	flex-direction: column;
	width: 100%;
`
const Wrapper = styled.div`
	flex: 1;
	padding: 1rem 1.875rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 450px) {
		padding: 1rem;
	}
`
const Brand = styled.div`
	display: flex;
	flex-direction: column;
	a {
		text-decoration: none;
		color: inherit;
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`
const Title = styled.span`
	flex: 1;
	display: flex;
	flex-direction: row;
	padding-left: 0.675rem;
	color: #4f1b2a;
	font-family: 'Ramaraja';
	font-size: 2.675rem;
	height: 2rem;
	line-height: 2.675rem;
	@media screen and (max-width: 450px) {
		padding-right: 1rem;
	}
`

const PageHeader = ({ siteTitle, toggle, isOpen }) => {
	return (
		<Header>
			<Wrapper>
				<Brand>
					<Link to="/">
						<BurgerIcon width="55" height="52.34" alt="Swan Burger" />
						<Title>{siteTitle}</Title>
					</Link>
				</Brand>
				<Menu />
				<BurgerMenu isOpen={isOpen} toggle={toggle} />
			</Wrapper>
		</Header>
	)
}

PageHeader.propTypes = {
	siteTitle: PropTypes.string,
	toggle: PropTypes.func,
	isOpen: PropTypes.bool,
}

PageHeader.defaultProps = {
	siteTitle: ``,
	isOpen: false,
	toggle: () => {},
}

export default PageHeader
