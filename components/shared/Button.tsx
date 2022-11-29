import { Button as AntdButton } from 'antd'
import styled from 'styled-components'

const StyledAntdButton = styled(AntdButton)``

function Button({ children, ...props }: { children?: React.ReactNode }) {
	return (
		<>
			<StyledAntdButton {...props}>{children}</StyledAntdButton>
		</>
	)
}

export default Button
