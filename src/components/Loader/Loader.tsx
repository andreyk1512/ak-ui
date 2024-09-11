import { Typography } from '../Typography';
import { LoaderProps } from './Loader.types';
import LoaderIcon from '../../assets/icons/loader.svg?react';
import { spinnerStyles, wrapperStyles } from './Loader.styles';

export const Loader = ({ size = 'default', label }: LoaderProps) => {
  if (label) {
    return (
      <div css={wrapperStyles}>
        <LoaderIcon aria-label="loader" css={spinnerStyles(size)} />
        <Typography.Text tiny={size === 'small'}>{label}</Typography.Text>
      </div>
    );
  }

  return <LoaderIcon aria-label="loader" css={spinnerStyles(size)} />;
};
