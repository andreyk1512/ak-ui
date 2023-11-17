import { paragraphStyles } from './Paragraph.styles';
import { ParagraphProps } from './Paragraph.types';

export const Paragraph = ({ children }: ParagraphProps) => {
  return <p css={paragraphStyles}>{children}</p>;
};
