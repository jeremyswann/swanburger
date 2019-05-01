import React from 'react'
import { styled } from 'linaria/react'

import Twitter from './twitter'
import Github from './github'
import Gatsby from './gatsby'

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
	display: flex;
	font-family: 'Roboto Slab';
	font-size: 1rem;
	max-height: 1.5rem;
	color: #4f1b2a;
	margin: 0.5rem 0;
	flex: 1;
	a {
		display: flex;
		padding-left: 0.5rem;
		svg {
			display: flex;
			transition: fill 0.3s ease-in-out;
			&#gatsby {
				&:hover {
					fill: #b25ed1;
				}
			}
		}
	}
`
const Social = styled.span`
	font-size: 1.5rem;
	height: 1.5rem;
	display: flex;
	flex-direction: row;
	margin: 0.5rem 0;
	justify-content: flex-end;
	a {
		margin: 0 0.5rem;
		svg {
			display: flex;
			transition: fill 0.3s ease-in-out;
			&#twitter {
				&:hover {
					fill: #387fd2;
				}
			}
			&#github {
				&:hover {
					fill: #333333;
				}
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
				© SwanBurger {new Date().getFullYear()}, built with
				<a href="https://gatsbyjs.org" target="_blank noopener noreferrer">
					<Gatsby color="#4f1b2a" alt="Gatsby" />
				</a>
			</Text>
			<Social>
				<a
					href="https://twitter.com/JeremySwann"
					target="_blank noopener noreferrer"
				>
					<Twitter color="#4f1b2a" alt="Twitter" />
				</a>
				<a
					href="https://github.com/JeremySwann"
					target="_blank noopener noreferrer"
				>
					<Github color="#4f1b2a" alt="Github" />
				</a>
			</Social>
		</Footer>
	)
}

export default PageFooter
