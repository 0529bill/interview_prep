import { Col, Row } from 'antd';

import Button from '@/components/shared/Button';
import Card from '@/components/shared/Card';
import Link from '@/components/shared/Link';
import Title from '@/components/shared/Title';
import { database } from '../../database';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const MainContainer = styled.div`
  width: 100%;
  padding: 0px 150px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  margin: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MainPage: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  console.log('pid', pid);
  console.log('database', database);
  return (
    <MainContainer>
      <TitleWrapper>
        <Title level={2}>Choose category</Title>
      </TitleWrapper>
      <CardWrapper className="site-card-wrapper">
        <Row gutter={[32, 32]}>
          <Col md={8} span={24}>
            <Card
              title="Javascript"
              bordered={false}
              hoverable={true}
              questionNum={database.filter((t) => t.category === 'Javascript').length}
            />
          </Col>
          <Col md={8} span={24}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col md={8} span={24}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </CardWrapper>
      <ButtonWrapper>
        <Button size="large">
          <Link href="/">Previous</Link>
        </Button>
        <Button size="large">
          <Link href="/scrollCard">Next</Link>
        </Button>
      </ButtonWrapper>
    </MainContainer>
  );
};

export default MainPage;
