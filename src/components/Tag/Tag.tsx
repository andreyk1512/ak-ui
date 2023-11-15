import { tagStyles } from './Tag.styles';
import { TagProps } from './Tag.types';

export const Tag = ({ children, color }: TagProps) => {
  return <span css={tagStyles(color)}>{children}</span>;
};
