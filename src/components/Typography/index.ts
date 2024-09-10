export * from './Typography';
export * from './Typography.types';

import { Text, Title, Paragraph } from './components';
import { Typography as OriginTypography } from './Typography';

export type TypographyProps = typeof OriginTypography & {
  Text: typeof Text;
  Title: typeof Title;
  Paragraph: typeof Paragraph;
};

export const Typography = OriginTypography as TypographyProps;
Typography.Text = Text;
Typography.Title = Title;
Typography.Paragraph = Paragraph;
