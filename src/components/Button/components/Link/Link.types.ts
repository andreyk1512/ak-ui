import { ReactNode } from 'react';

export type LinkProps = {
  href?: string;
  target?: HTMLLinkElement['target'];
  disabled?: boolean,
  children: ReactNode,
};
