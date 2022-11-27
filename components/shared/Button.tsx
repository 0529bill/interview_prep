import { Button as AntdButton } from 'antd';

function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AntdButton type="primary" ghost>
        {children}
      </AntdButton>
    </>
  );
}

export default Button;
