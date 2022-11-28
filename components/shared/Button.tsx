import { Button as AntdButton } from 'antd';

function Button({
  children,
  shape = 'default',
  size = 'middle',
  block = false,
  ...props
}: {
  shape?: 'circle' | 'default' | 'round';
  size?: 'large' | 'small' | 'middle';
  block?: boolean | undefined;
  children?: React.ReactNode;
}) {
  return (
    <>
      <AntdButton type="primary" shape={shape} size={size} block={block} {...props}>
        {children}
      </AntdButton>
    </>
  );
}

export default Button;
