import { LinkProps } from './Link.types';
import { linkStyles } from './Link.styles';

export const Link = ({ href, target, disabled, children }: LinkProps) => (
  <a href={disabled ? undefined : href} target={target} css={linkStyles({disabled})}>
    {children}
  </a>
);
