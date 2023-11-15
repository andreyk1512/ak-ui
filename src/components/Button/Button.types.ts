import { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  size?: 'default' | 'small';
  type?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  ghost?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  extraClass?: string;
  htmlType?: HTMLButtonElement['type'];
};
