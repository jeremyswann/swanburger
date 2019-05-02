import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'
import { graphql, Link } from 'gatsby'

import Abstract from './abstract'

const blog = [
	{
		slug: 'hashing-strings',
		title: 'Hashing strings and URLS everything you need to get started',
		category: 'Security',
		date: '2nd April 2019',
	},
	{
		slug: 'serverless-functions',
		title: 'Serverless funtions and static generated sites for blogs',
		category: 'Tech',
		date: '15th April 2019',
	},
]

const Section = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex: 1;
	margin: 0 auto;
	margin-bottom: 2rem;
	@media screen and (max-width: 412px) {
		flex-direction: column;
	}
`
const Featured = styled.div`
	display: flex;
	flex-direction: column;
	flex: 7;
	max-width: 220px;
	margin-right: 1rem;
`
const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	background-color: #4f1b2a;
	border-radius: 4.3px;
	/* border: #4f1b2a solid 4.3px; */
	margin-top: 1rem;
	font-family: 'Roboto Slab';
	a {
		display: flex;
		font-style: normal;
		font-weight: normal;
		text-decoration: none;
		cursor: pointer;
		color: inherit;
	}
	&.theme-dark {
		border-color: #4f1b2a;
		background-color: #4f1b2a;
		color: #fcf2f5;
		min-height: 306px;
		a {
			font-family: 'Ramaraja';
			font-size: 36px;
			line-height: 37px;
			padding: 27px;
			&:hover {
				text-decoration: underline;
			}
		}
	}
	&.theme-light {
		border-color: #eecbd4;
		background-color: #eecbd4;
		color: #4f1b2a;
		padding: 0.5rem;
		min-height: 144px;
		a {
			margin-bottom: 1rem;
			small.category {
				display: flex;
				background-color: #fcf2f5;
				border-radius: 4.3px;
				padding: 0.125rem 0.375rem;
				font-size: 0.75rem;
				font-family: 'Roboto Slab';
				font-weight: 600;
				color: #d69fad;
				margin: 0;
				&:hover {
					background-color: #4f1b2a;
					color: #fcf2f5;
				}
			}
			h2.title {
				display: flex;
				font-size: 0.875rem;
				font-family: 'Roboto Slab';
				font-weight: 300;
				margin: 0;
				&:hover {
					text-decoration: underline;
				}
			}
		}
		time.date {
			display: flex;
			font-family: 'Roboto Slab';
			font-weight: 400;
			font-size: 0.625rem;
			margin: 0;
			align-self: flex-end;
		}
	}
	&:first-child {
		margin-top: 0;
	}
`
const Decor = styled.div`
	z-index: 1;
	margin-top: -14px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-start;
	height: 45px;
	#abstract {
		transform: scaleY(-1) rotate(45deg) translate(5px, -7px);
		transform-origin: 0% 50%;
	}
`
const Recent = styled.div`
	display: flex;
	flex-direction: column;
	flex: 3;
	max-width: 330px;
	@media screen and (max-width: 420px) {
		align-self: flex-end;
	}
`

const Feed = props => {
	return (
		<Section>
			<Featured>
				<Card className="theme-dark">
					<Link to="/blog/jamstack">
						JAMstack and why you’ll use it for your next project.
					</Link>
				</Card>
				<Decor>
					<Abstract color="#4f1b2a" negative="#FCF2F5" />
				</Decor>
			</Featured>
			<Recent>
				{blog.map((post, index) => {
					const { slug, category, title, date } = post
					return (
						<Card className="theme-light" key={index}>
							<Link to={`/blog/${category}`}>
								<small className="category">{category}</small>
							</Link>
							<Link to={`/blog/${slug}`}>
								<h2 className="title">{title + '.'}</h2>
							</Link>
							<time dateTime={date} className="date">
								{date}
							</time>
						</Card>
					)
				})}
			</Recent>
		</Section>
	)
}

Feed.propTypes = {}

export default Feed
