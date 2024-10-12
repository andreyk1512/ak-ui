import { MouseEventHandler } from 'react';
import { LinkProps } from './Link.types';
import { linkStyles } from './Link.styles';
import { loaderStyles } from '../../Button.styles';

export const Link = ({ href, target, disabled, children, onClick, loading }: LinkProps) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> | undefined = onClick ? (e) => {
    e.preventDefault();
    onClick(e);
  } : undefined;

  return (
    <a onClick={handleClick} href={disabled ? undefined : href} target={target} css={linkStyles({ disabled })}>
      <span role="loader" hidden={!loading} css={loaderStyles} />
      {children}
    </a>
  );
};
