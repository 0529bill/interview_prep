import { Category, localStorageKey } from '../../lib/constants'
import { Col, Row } from 'antd'
import { getLocalStorage, setLocalStorage } from '@/utils/index'

import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Link from '@/components/shared/Link'
import Title from '@/components/shared/Title'
import { database } from '../../database'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useState } from 'react'

const MainContainer = styled.div`
	width: 100%;
	padding: 0px 150px;

	@media (max-width: 768px) {
		padding: 0px 0px;
	}
`

const TitleWrapper = styled.div`
	display: flex;
	justify-content: center;
`

const CardWrapper = styled.div`
	margin: 30px;
`

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`

const MainPage: React.FC = () => {
	const router = useRouter()
	const { pid } = router.query

	// const [currentCategory, setCurrentCategory] = useState([])
	const [isJSSelected, setJSSelected] = useState(false)
	const [isReactSelected, setReactSelected] = useState(false)
	const [isWebSelected, setWebSelected] = useState(false)

	const handleNextButton = (e) => {
		const currentCategory = []

		if (isJSSelected) {
			currentCategory.push(Category.JAVASCRIPT)
		}
		if (isReactSelected) {
			currentCategory.push(Category.REACT)
		}

		if (isWebSelected) {
			currentCategory.push(Category.WEB)
		}

		console.log('currentCategory', currentCategory)
		if (currentCategory.length > 0) {
			setLocalStorage(localStorageKey, currentCategory)
			router.push('/scrollCard')
		}
	}

	return (
		<MainContainer>
			<TitleWrapper>
				<Title level={2}>Choose category</Title>
			</TitleWrapper>
			<CardWrapper className="site-card-wrapper">
				<Row gutter={[32, 32]}>
					<Col md={8} span={24}>
						<Card
							isSelected={isJSSelected}
							onClick={() => setJSSelected((t) => !t)}
							title="Javascript"
							bordered={false}
							hoverable={true}
							questionNum={database.filter((t) => t.category === 'Javascript').length}
						/>
					</Col>
					<Col md={8} span={24}>
						<Card
							isSelected={isReactSelected}
							title="React"
							onClick={() => setReactSelected((t) => !t)}
							bordered={false}
						/>
					</Col>
					<Col md={8} span={24}>
						<Card
							isSelected={isWebSelected}
							title="Preparing..."
							onClick={() => setWebSelected((t) => !t)}
							bordered={false}
						/>
					</Col>
				</Row>
			</CardWrapper>
			<ButtonWrapper>
				<Button size="large">
					<Link href="/">Previous</Link>
				</Button>
				<Button size="large" onClick={handleNextButton}>
					<Link href="{}">Next</Link>
				</Button>
			</ButtonWrapper>
		</MainContainer>
	)
}

export default MainPage
