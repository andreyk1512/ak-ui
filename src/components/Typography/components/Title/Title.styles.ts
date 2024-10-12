import { css } from '@emotion/react';
import * as styles from '../../../../styles';
import { TitleProps } from './Title.types.ts';

export const titleStyles = (type: TitleProps['type']) => css`
  margin: 0;
  line-height: 100%;
  color: ${styles.color.yankeesBlue};
  font-weight: ${styles.fontWeight.bold};

  ${type === 1 && css`
    font-size: ${styles.fontSize.veryLarge};
  `}

  ${type === 2 && css`
    font-size: ${styles.fontSize.large};
  `}

  ${type === 3 && css`
    font-size: ${styles.fontSize.medium};
  `}

  ${type === 4 && css`
    font-size: ${styles.fontSize.regular};
  `}

  ${type === 5 && css`
    font-size: ${styles.fontSize.regular};
  `}
`;
