import styled, { css } from 'styled-components';

import { Card as AntdCard } from 'antd';

const StyledAntdCard = styled(AntdCard)`
  height: ${({ height }) => height};
`;

function Card({ size, ...props }: { size?: string }) {
  let height;
  switch (size) {
    case 'large': {
      height = '450px';
      break;
    }
    case 'medium': {
      break;
    }
    case 'small': {
      break;
    }
    case 'custom': {
      break;
    }
    default: {
      height = '250px';
    }
  }

  return <StyledAntdCard height={height} {...props} />;
}

export default Card;
