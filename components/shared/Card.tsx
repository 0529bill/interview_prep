import styled, { css } from 'styled-components'

import { Card as AntdCard } from 'antd'
import { useState } from 'react'

const StyledAntdCard = styled(AntdCard)`
	height: ${({ height }) => height};
	background-color: ${({ isSelected }) => (isSelected ? '#cae2f7' : null)};
`

const StyledDiv = styled.div``

function Card({
	questionNum,
	size,
	isSelected,
	hoverable = true,
	...props
}: {
	questionNum: number
	size?: string
	isSelected?: boolean
	hoverable?: boolean
}) {
	const [cardClicked, setCardClicked] = useState(false)

	const handleOnClick = () => {
		setCardClicked((t) => !t)
	}

	let height
	switch (size) {
		case 'large': {
			height = '450px'
			break
		}
		case 'medium': {
			break
		}
		case 'small': {
			break
		}
		case 'custom': {
			break
		}
		default: {
			height = '250px'
		}
	}

	return (
		<StyledAntdCard
			onClick={handleOnClick}
			isSelected={isSelected}
			height={height}
			hoverable={hoverable}
			cardClicked={cardClicked}
			{...props}
		>
			<StyledDiv>total questions: {questionNum}</StyledDiv>
		</StyledAntdCard>
	)
}

export default Card
