import { Dispatch, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import Button from '@/components/shared/Button'
import Title from '@/components/shared/Title'

interface CardWrapperProps {
	frontClicked: boolean
	backClicked: boolean
}

interface StyledButtonProps {
	onClick: React.MouseEventHandler
}

const CardContainer = styled.div`
	background-color: transparent;
	width: 500px;
	height: 500px;
	perspective: 1000px;
`

const CardWrapper = styled.div<CardWrapperProps>`
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.6s;
	transform-style: preserve-3d;
	/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */

	${({ frontClicked }) =>
		frontClicked &&
		css`
			transform: rotateY(180deg);
		`}

	${({ backClicked }) =>
		backClicked &&
		css`
			transform: rotateY(0deg);
		`}
`

const Card = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
`

const FrontSide = styled(Card)`
	border-radius: 25px;
	background-color: #0093e9;
	background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`

const BackSide = styled(Card)`
	transform: rotateY(180deg);
	border-radius: 25px;
	background-color: #4158d0;
	background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
`

const AnswerWrapper = styled.div`
	padding: 10px;
`

const QuestionWrapper = styled.div`
	padding: 10px;
`

const HintsWrapper = styled.div`
	padding: 10px;
	margin-top: 16px;
`

const StyledButton = styled(Button)<StyledButtonProps>`
	width: 100%;
	max-width: 250px;
	height: 100%;
	background-color: transparent;
	border: 3px solid #5e5e5e;
	font-weight: bold;
	margin: 10px;

	:hover {
		background-color: #e76060;
	}

	@media screen and (max-width: 425px) {
		font-size: 0.875rem;
		margin: 0px;
		height: 100%;
		max-width: 100px;
	}
`

function ScrollComponent({
	data: { category, question, hints, answer },
	indexChanged,
	setIndexChanged,
}: {
	data: {
		category: string
		question: string
		hints: string
		answer: string
	}

	indexChanged: boolean
	setIndexChanged: Dispatch<boolean>
}) {
	const [frontClicked, setFrontClicked] = useState(false)
	const [backClicked, setBackClicked] = useState(false)
	const [showHints, setShowHints] = useState(false)

	const handleHintsClicked = (e) => {
		e.stopPropagation()
		setShowHints((t) => !t)
	}

	useEffect(() => {
		if (indexChanged) {
			setIndexChanged(false)
			setBackClicked(true)
			setFrontClicked(false)
			setShowHints(false)
		}
	}, [indexChanged, setIndexChanged])

	return (
		<CardContainer>
			<CardWrapper frontClicked={frontClicked} backClicked={backClicked}>
				<FrontSide
					onClick={() => {
						setFrontClicked(true)
						setBackClicked(false)
					}}
				>
					<Title>Category: {category}</Title>
					<QuestionWrapper>
						<Title level={2}>question: {question}</Title>
					</QuestionWrapper>
					<HintsWrapper>
						<StyledButton onClick={handleHintsClicked}>
							<Title level={3}>hints</Title>
						</StyledButton>
						{showHints && <Title level={3}>{hints}</Title>}
					</HintsWrapper>
				</FrontSide>
				<BackSide
					onClick={() => {
						setBackClicked(true)
						setFrontClicked(false)
						setShowHints(false)
					}}
				>
					<Title level={3}>question: {question}</Title>
					<Title level={3}>Answer: {answer}</Title>
				</BackSide>
			</CardWrapper>
		</CardContainer>
	)
}

export default ScrollComponent
