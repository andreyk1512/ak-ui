import { textStyles } from './Text.styles';
import { TextProps } from './Text.types';

export const Text = ({ children, strikethrough, type = 'default', bold, tiny }: TextProps) => {
  return <span css={textStyles({ strikethrough, type, bold, tiny })}>{children}</span>;
};
