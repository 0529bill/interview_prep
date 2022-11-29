import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { getLocalStorage, setLocalStorage } from '@/utils/index'

import ScrollComponent from '@/components/ScrollComponent'
import Title from '@/components/shared/Title'
import { database } from '../database'
import { localStorageKey } from '../lib/constants'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'

const ScrollCardContainer = styled.div`
	margin: 30px;
	@media screen and (max-width: 425px) {
		margin: 0px;
	}
`

const TitleWrapper = styled.div`
	display: flex;
	justify-content: center;
`

const CardWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100%;
`

const IconWrapper = styled.div``

function ScrollCard() {
	const [storageData, setStorageData] = useState([])
	const [currentCardIndex, setCurrentCardIndex] = useState(false)
	const [maxCardIndex, setMaxCardIndex] = useState(false)

	const handleChangeCard = (arrowDirection: string) => {
		if (arrowDirection === 'left') {
			if (currentCardIndex === 0) {
				return
			}
			setCurrentCardIndex((t) => t - 1)
		} else if (arrowDirection === 'right') {
			if (currentCardIndex >= maxCardIndex) {
				setCurrentCardIndex((t) => t + 1)
			}
		}
	}

	useEffect(() => {
		const fetchedData = getLocalStorage(localStorageKey)
		if (fetchedData.length > 0) {
			setStorageData(fetchedData)
			setCurrentCardIndex(0)
			setMaxCardIndex(fetchedData.length - 1)
		}
	}, [setStorageData])

	return (
		<ScrollCardContainer>
			<TitleWrapper>
				<Title>Scroll</Title>
			</TitleWrapper>
			<CardWrapper>
				<CaretLeftOutlined onClick={() => handleChangeCard('left')} style={{ fontSize: '3rem' }} />
				<ScrollComponent data={storageData[currentCardIndex]} />
				<CaretRightOutlined onClick={() => handleChangeCard('right')} style={{ fontSize: '3rem' }} />
			</CardWrapper>
			<IconWrapper></IconWrapper>
		</ScrollCardContainer>
	)
}

export default ScrollCard
