import { MouseEventHandler } from 'react';
import { LinkProps } from './Link.types';
import { linkStyles } from './Link.styles';

export const Link = ({ href, target, disabled, children, onClick }: LinkProps) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> | undefined = onClick ? (e) => {
    e.preventDefault();
    onClick(e);
  } : undefined;

  return (
    <a onClick={handleClick} href={disabled ? undefined : href} target={target} css={linkStyles({disabled})}>
      {children}
    </a>
  );
};
