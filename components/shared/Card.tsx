import styled, { css } from 'styled-components';

import { Card as AntdCard } from 'antd';
import { useState } from 'react';

const StyledAntdCard = styled(AntdCard)`
  height: ${({ height }) => height};
  background-color: ${({ cardClicked }) => (cardClicked ? 'aliceblue' : null)};
`;

function Card({ size, hoverable = true, ...props }: { size?: string; hoverable?: boolean }) {
  const [cardClicked, setCardClicked] = useState(false);

  const handleOnClick = () => {
    setCardClicked((t) => !t);
  };

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

  return (
    <StyledAntdCard
      onClick={handleOnClick}
      height={height}
      hoverable={hoverable}
      cardClicked={cardClicked}
      {...props}
    />
  );
}

export default Card;
