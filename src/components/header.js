import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { styled } from 'linaria/react'

const Header = styled.header`
	background: rebeccapurple;
	margin-bottom: 1.45rem;
`
const TitleWrapper = styled.div`
	margin: 0 auto;
	max-width: 960;
	padding: 1.45rem 1.0875rem;
`
const Title = styled.h1`
	margin: 0;
	a {
		color: white;
		text-decoration: none;
	}
`
const StyledLink = styled(Link)`
	color: white;
	text-decoration: none;
`

const PageHeader = ({ siteTitle }) => (
	<Header>
		<TitleWrapper>
			<Title>
				<Link to="/">{siteTitle}</Link>
			</Title>
		</TitleWrapper>
	</Header>
)

PageHeader.propTypes = {
	siteTitle: PropTypes.string,
}

PageHeader.defaultProps = {
	siteTitle: ``,
}

export default PageHeader
