import { css } from '@emotion/react';
import * as styles from '../../../../styles';

export const textAreaStyles = () => css`
  background-color: ${styles.color.aliceBlue};
  border-radius: 6px;
  color: ${styles.color.uclaBlue};
  width: 100%;
  border: none;
  box-sizing: border-box;
  padding: 15px;
  font-size: ${styles.fontSize.regular};
  resize: vertical;

  &:focus {
    color: ${styles.color.yankeesBlue};
    outline: none;
  }
`;
