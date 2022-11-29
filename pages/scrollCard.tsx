import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { getLocalStorage, setLocalStorage } from '@/utils/index'

import ScrollComponent from '@/components/ScrollComponent'
import Title from '@/components/shared/Title'
import { database } from '../database'
import { localStorageKey } from '../lib/constants'
import styled from 'styled-components'
import { useEffect } from 'react'

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
	useEffect(() => {
		const a = getLocalStorage(localStorageKey)
		console.log('a', a)
	})

	return (
		<ScrollCardContainer>
			<TitleWrapper>
				<Title>Scroll</Title>
			</TitleWrapper>
			<CardWrapper>
				<CaretLeftOutlined onClick={() => alert('hah')} style={{ fontSize: '3rem' }} />
				<ScrollComponent data />
				<CaretRightOutlined style={{ fontSize: '3rem' }} />
			</CardWrapper>
			<IconWrapper></IconWrapper>
		</ScrollCardContainer>
	)
}

export default ScrollCard
