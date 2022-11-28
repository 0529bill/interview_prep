import Title from '@/components/shared/Title';
import styled from 'styled-components';

const ScrollCardContainer = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function ScrollCard() {
  return (
    <ScrollCardContainer>
      <TitleWrapper>
        <Title>Scroll</Title>
      </TitleWrapper>
    </ScrollCardContainer>
  );
}

export default ScrollCard;
