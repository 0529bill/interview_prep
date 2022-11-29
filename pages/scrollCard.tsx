import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { getLocalStorage, shuffleArray } from '@/utils/index'

import ScrollComponent from '@/components/ScrollComponent'
import Title from '@/components/shared/Title'
import { database } from '../database'
import { localStorageKey } from '../lib/constants'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
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

function ScrollCard() {
	const router = useRouter()
	const [storageData, setStorageData] = useState([])
	const [currentCardIndex, setCurrentCardIndex] = useState(null)
	const [maxCardIndex, setMaxCardIndex] = useState(null)

	const handleChangeCard = (arrowDirection: string) => {
		if (currentCardIndex == null) return
		if (arrowDirection === 'left') {
			if (currentCardIndex === 0) {
				return
			}
			setCurrentCardIndex((t) => t - 1)
		} else if (arrowDirection === 'right') {
			if (currentCardIndex < maxCardIndex) {
				setCurrentCardIndex((t) => t + 1)
			} else {
				alert('reach the end of the card')
				router.push('/')
			}
		}
	}

	useEffect(() => {
		const fetchedCategory = getLocalStorage(localStorageKey)
		console.log('fetchedData', fetchedCategory)
		if (fetchedCategory.length > 0) {
			const selectedData = database.filter((data) => fetchedCategory.includes(data.categoryId))
			shuffleArray(selectedData)
			setStorageData(selectedData)
			setCurrentCardIndex(0)
			setMaxCardIndex(selectedData.length - 1)
		}
	}, [setStorageData])

	return (
		<ScrollCardContainer>
			<TitleWrapper>
				<Title>Scroll</Title>
			</TitleWrapper>
			<CardWrapper>
				<CaretLeftOutlined onClick={() => handleChangeCard('left')} style={{ fontSize: '3rem' }} />
				<ScrollComponent data={currentCardIndex !== null && storageData[currentCardIndex]} />
				<CaretRightOutlined onClick={() => handleChangeCard('right')} style={{ fontSize: '3rem' }} />
			</CardWrapper>
		</ScrollCardContainer>
	)
}

export default ScrollCard
