import React from 'react'
import { styled } from 'linaria/react'

import Twitter from './twitter'
import Github from './github'

const Footer = styled.footer`
	justify-self: flex-end;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 0.5rem 1rem;
	flex-wrap: wrap;
`
const Text = styled.span`
	font-family: 'Roboto Slab';
	font-size: 1rem;
	color: #4f1b2a;
	margin: 0.5rem 0;
	flex: 1;
	a {
		color: #b25ed1;
	}
`
const Social = styled.span`
	font-size: 24px;
	height: 24px;
	display: flex;
	flex-direction: row;
	margin: 0.5rem 0;
	justify-content: flex-end;
	a {
		margin: 0 0.5rem;
		svg {
			fill: #4f1b2a;
		}
		&:hover {
			svg {
				fill: #4f1b2a;
			}
		}
		&:first-child {
			margin-left: 0;
		}
		&:last-child {
			margin-right: 0;
		}
	}
`

const PageFooter = () => {
	return (
		<Footer>
			<Text>
				© SwanBurger {new Date().getFullYear()}, built with{' '}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</Text>
			<Social>
				<a href="https://twitter.com/JeremySwann">
					<Twitter color="#4f1b2a" />
				</a>
				<a href="https://twitter.com/JeremySwann">
					<Github color="#4f1b2a" />
				</a>
			</Social>
		</Footer>
	)
}

export default PageFooter
