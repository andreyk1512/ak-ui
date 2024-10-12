import { MouseEventHandler, ReactNode } from 'react';

export type LinkProps = {
  href?: HTMLAnchorElement['href'];
  target?: HTMLAnchorElement['target'];
  disabled?: boolean,
  children: ReactNode,
  onClick?: MouseEventHandler<HTMLAnchorElement>,
  loading?: boolean,
};
