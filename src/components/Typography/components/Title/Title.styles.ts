import { css } from '@emotion/react';
import * as styles from '../../../../styles';

export const titleStyles = css`
  line-height: 100%;
  color: ${styles.color.yankeesBlue};
  font-weight: ${styles.fontWeight.bold};

  &h1 {
    font-size: ${styles.fontSize.veryLarge};
  }

  &h2 {
    font-size: ${styles.fontSize.large};
  }

  &h3 {
    font-size: ${styles.fontSize.medium};
  }

  &h4 {
    font-size: ${styles.fontSize.regular};
  }

  &h5 {
    font-size: ${styles.fontSize.regular};
  }
`;
