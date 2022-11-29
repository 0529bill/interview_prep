import styled, { css } from 'styled-components'

interface textProps {
	level: number | undefined
}

const StyledText = styled.p<textProps>`
	${({ level }) => {
		switch (level) {
			case 1:
				return css`
					font-size: 1.5rem;
				`
			case 2:
				return css`
					font-size: 1.3rem;
				`
				break
			case 3:
				return css`
					font-size: 1rem;
				`
				break
			case 4:
				return css`
					font-size: 0.75rem;
				`
				break
			default:
				return css`
					font-size: 1.5rem;
				`
		}
	}}
`

function Title({ children, level }: { children: React.ReactNode; level?: 1 | 2 | 3 | 4 | undefined }) {
	return <StyledText level={level}>{children}</StyledText>
}

export default Title
