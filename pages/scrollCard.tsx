import ScrollComponent from '@/components/ScrollComponent';
import Title from '@/components/shared/Title';
import styled from 'styled-components';
import { useState } from 'react';

const ScrollCardContainer = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

function ScrollCard() {
  return (
    <ScrollCardContainer>
      <TitleWrapper>
        <Title>Scroll</Title>
      </TitleWrapper>
      <CardWrapper>
        <ScrollComponent />
      </CardWrapper>
    </ScrollCardContainer>
  );
}

export default ScrollCard;
