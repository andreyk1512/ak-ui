export * from './Button';
export * from './Button.types';

import { Link } from './components';
import { Button as OriginButton } from './Button';

export type ButtonProps = typeof OriginButton & {
  Link: typeof Link;
};

export const Button = OriginButton as ButtonProps;
Button.Link = Link;
