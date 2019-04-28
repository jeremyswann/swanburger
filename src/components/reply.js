import React, { useState } from 'react'
import { styled } from 'linaria/react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Emoji from './emoji'

const ReplyForm = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 1rem;
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 390px;
	flex: 1;
	justify-content: flex-start;
	align-items: flex-end;
	input,
	textarea {
		border: none;
		background: transparent;
		font-size: 0.875rem;
		font-family: 'Roboto Slab';
		color: inherit;
		&:focus {
			outline-color: #d69fad;
			outline-offset: -1px;
			outline-width: 1px;
			outline-style: solid;
		}
		&::-ms-input-placeholder, /* Microsoft Edge */
		&:-ms-input-placeholder, /* Internet Explorer 10-11 */
		&::placeholder {
			color: #d69fad;
			opacity: 1; /* Firefox */
		}
	}
`
const Who = styled.div`
	display: ${values => (values.messege ? 'flex' : 'none')};
	flex-direction: row;
	background-color: #ffffff;
	border-radius: 4.3px 4.3px 0 0;
	align-self: stretch;
	margin: 0;
	flex: 1;
	input {
		display: flex;
		flex-direction: row;
		flex: 1;
		margin: 0;
		padding: 0.4rem 0rem 0.5rem 1.5rem;
		&[name='name'] {
			flex: 4;
			width: 40%;
		}
		&[name='email'] {
			flex: 6;
			width: 60%;
		}
	}
`
const Messege = styled.div`
	display: flex;
	flex-direction: row;
	background-color: #ffffff;
	border-radius: ${values => (values.messege ? '0 0 4.3px 4.3px' : '4.3px')};
	align-self: stretch;
	margin: 0;
	flex: 1;
	position: relative;
	svg {
		z-index: 1;
		position: absolute;
		right: 0;
		margin: 0.5rem 1rem 0.5rem 0;
	}
	textarea {
		flex: 1;
		padding: 0.4rem 2.5rem 0.5rem 1.5rem;
		margin: 0;
	}
`
const Send = styled.button`
	display: ${values => (values.messege ? 'flex' : 'none')};
	flex-direction: row;
	background-color: #4f1b2a;
	color: #fcf2f5;
	font-size: 0.875rem;
	border-radius: 4.3px;
	padding: 0.5rem 1rem;
	margin: 0;
	margin-top: 1rem;
	border: none;
	&:focus {
		outline-color: #d69fad;
		outline-offset: 4px;
		outline-width: 1px;
		outline-style: solid;
	}
`

const Reply = () => {
	const [rows, setRows] = useState(1)
	const [minRows] = useState(1)
	const [maxRows] = useState(4)
	const handleRowsChange = event => {
		const textareaLineHeight = 24
		const previousRows = event.target.rows
		event.target.rows = minRows // reset number of rows in textarea
		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight)
		if (currentRows === previousRows) {
			event.target.rows = currentRows
		}
		if (currentRows >= maxRows) {
			event.target.rows = maxRows
			event.target.scrollTop = event.target.scrollHeight
		}
		setRows(currentRows < maxRows ? currentRows : maxRows)
	}
	return (
		<ReplyForm>
			<Formik
				initialValues={{ name: '', email: '', messege: '' }}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2))
						setSubmitting(false)
					}, 500)
				}}
				validationSchema={Yup.object().shape({
					email: Yup.string()
						.email()
						.required('Required'),
				})}
				render={props => {
					const {
						values,
						touched,
						errors,
						isSubmitting,
						handleChange,
						handleBlur,
						handleSubmit,
					} = props
					return (
						<Form onSubmit={handleSubmit}>
							<Who {...values}>
								<input
									type="text"
									name="name"
									aria-label="name"
									value={values.name}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="Name"
									required
								/>
								<input
									type="email"
									name="email"
									aria-label="email"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="Email"
									required
								/>
							</Who>
							<Messege {...values}>
								<textarea
									name="messege"
									aria-label="messege"
									value={values.messege}
									onChange={e => {
										handleRowsChange(e), handleChange(e)
									}}
									onBlur={handleBlur}
									rows={rows}
									placeholder="Compose your messege..."
									required
								/>
								<Emoji color="#D69FAD" />
							</Messege>
							<Send {...values} type="submit" disabled={isSubmitting}>
								Send
							</Send>
						</Form>
					)
				}}
			/>
		</ReplyForm>
	)
}

export default Reply
