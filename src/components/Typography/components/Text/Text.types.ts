import { CommonProps } from '../../types';

export type TextProps = CommonProps & {
  type?: 'default' | 'secondary';
  strikethrough?: boolean;
  bold?: boolean;
  tiny?: boolean;
};
