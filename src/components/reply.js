import React, { useState } from 'react'
import { styled } from 'linaria/react'

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
`
const Messege = styled.div`
	display: flex;
	flex-direction: row;
	background-color: #ffffff;
	border-radius: 4.3px;
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
`
const TextArea = styled.textarea`
	border: none;
	background: transparent;
	flex: 1;
	padding: 0.4rem 2.5rem 0.5rem 1.5rem;
	margin: 0;
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
`
const Send = styled.button`
	display: flex;
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
	const [value, setValue] = useState('')
	const [rows, setRows] = useState(1)
	const [minRows] = useState(1)
	const [maxRows] = useState(3)
	const handleChange = event => {
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
		setValue(event.target.value)
		setRows(currentRows < maxRows ? currentRows : maxRows)
	}
	const [blur, setBlur] = useState(false)
	const handleBlur = () => setBlur(!blur)
	const handleSubmit = () => fetch()
	return (
		<ReplyForm>
			<Form POST onSubmit={handleSubmit}>
				<Messege>
					<TextArea
						aria-label="messege"
						value={value}
						onChange={handleChange}
						onBlur={handleBlur}
						rows={rows}
						placeholder="Compose your messege..."
					/>
					<Emoji color="#D69FAD" />
				</Messege>
				<Send style={{ display: value ? 'flex' : 'none' }}>Send</Send>
			</Form>
		</ReplyForm>
	)
}

export default Reply
