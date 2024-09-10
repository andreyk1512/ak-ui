import { css } from '@emotion/react';
import * as styles from '../../../../styles';

export const labelStyles = css`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: ${styles.color.yankeesBlue};
  line-height: 100%;

  svg:last-child {
    margin-left: -5px;
    color: ${styles.color.jasper};
    opacity: 0.5;
  }
`;

export const inputStyles = css`
  display: none;
`;
