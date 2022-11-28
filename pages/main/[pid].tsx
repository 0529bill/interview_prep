import { Col, Row } from 'antd';

import Card from '@/components/shared/Card';
import Title from '@/components/shared/Title';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const MainContainer = styled.div`
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  margin: 30px;
`;

const MainPage: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  console.log('pid', pid);

  return (
    <MainContainer>
      <TitleWrapper>
        <Title level={2}>Main Page</Title>
      </TitleWrapper>

      <CardWrapper className="site-card-wrapper">
        <Row gutter={[16, 16]}>
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
    </MainContainer>
  );
};

export default MainPage;
