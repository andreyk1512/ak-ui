import { Paragraph, Text, Title } from './components';
import { TypographyProps } from './Typography.types';

export const Typography = ({ children }: TypographyProps) => <article>{children}</article>;

Typography.Text = Text;
Typography.Paragraph = Paragraph;
Typography.Title = Title;
