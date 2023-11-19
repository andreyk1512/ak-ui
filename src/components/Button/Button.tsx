import { buttonStyles, loaderStyles } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = ({
  children,
  size = 'default',
  type = 'default',
  disabled,
  loading,
  ghost,
  onClick,
  extraClass,
  htmlType = 'button',
}: ButtonProps) => {
  return (
    <button
      css={buttonStyles({ size, type, ghost })}
      disabled={disabled}
      onClick={onClick}
      className={extraClass}
      type={htmlType}
    >
      {loading ? <span role="loader" css={loaderStyles} /> : null}
      {children}
    </button>
  );
};
