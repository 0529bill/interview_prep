import { Button as AntdButton } from 'antd';
import styled from 'styled-components';

const StyledAntdButton = styled(AntdButton)`
  margin: 20px;
`;

function Button({
  children,
  // shape = 'default',
  // size = 'middle',
  // block = false,
  ...props
}: {
  // shape?: 'circle' | 'default' | 'round';
  // size?: 'large' | 'small' | 'middle';
  // block?: boolean | undefined;
  children?: React.ReactNode;
}) {
  return (
    <>
      <StyledAntdButton {...props}>{children}</StyledAntdButton>
    </>
  );
}

export default Button;
