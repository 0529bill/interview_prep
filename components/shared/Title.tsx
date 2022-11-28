import { Typography } from 'antd';

const { Title: AntdTitle } = Typography;

function Title({ children, level }: { children: React.ReactNode; level?: 1 | 5 | 2 | 3 | 4 | undefined }) {
  return <AntdTitle level={level}>{children}</AntdTitle>;
}

export default Title;
