import { css } from '@emotion/react';
import { LinkProps } from './Link.types';
import * as styles from '../../../../styles';

export const linkStyles = ({disabled}: Pick<LinkProps, 'disabled'>) => css`
  cursor: pointer;
  text-decoration: none;
  color: ${styles.color.tuftsBlue};
  font-size: ${styles.fontSize.regular};
  font-weight: ${styles.fontWeight.regular};

  ${disabled && css`
    cursor: not-allowed;
    opacity: 0.65;
  `}
`;
