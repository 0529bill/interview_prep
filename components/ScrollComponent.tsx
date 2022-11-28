import styled, { css } from 'styled-components';

import { useState } from 'react';

const CardContainer = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
`;

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  ${({ frontClicked }) =>
    frontClicked &&
    css`
      transform: rotateY(180deg);
    `}

  ${({ backClicked }) =>
    backClicked &&
    css`
      transform: rotateY(0deg);
    `}
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const FrontSide = styled(Card)`
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`;

const BackSide = styled(Card)`
  transform: rotateY(180deg);

  background-color: #4158d0;
  background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
`;

function ScrollComponent() {
  const [frontClicked, setFrontClicked] = useState(false);
  const [backClicked, setBackClicked] = useState(false);
  return (
    <CardContainer>
      <CardWrapper frontClicked={frontClicked} backClicked={backClicked}>
        <FrontSide
          onClick={() => {
            setFrontClicked(true);
            setBackClicked(false);
          }}
          frontClicked={frontClicked}
        >
          <div>Front Side</div>
        </FrontSide>
        <BackSide
          onClick={() => {
            setBackClicked(true);
            setFrontClicked(false);
          }}
          backClicked={backClicked}
        >
          <div>Back Side</div>
        </BackSide>
      </CardWrapper>
    </CardContainer>
  );
}

export default ScrollComponent;
