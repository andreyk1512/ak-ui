import { css } from '@emotion/react';
import * as styles from '../../../../styles';

export const visibilityIconWrapperStyles = () => css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${styles.color.cadetBlue};
  opacity: 0.9;
  width: 18px;
  height: 18px;

  &:hover {
    opacity: 1;
  }
`;
