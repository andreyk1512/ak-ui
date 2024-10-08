import { css } from '@emotion/react';
import * as styles from '../../styles';

export const inputWrapperStyles = css`
  display: inline-flex;
  align-items: center;
  background-color: ${styles.color.aliceBlue};
  border-radius: 6px;
  color: ${styles.color.uclaBlue};
  width: 100%;
`;

export const inputStyles = (hasSuffix?: boolean) => css`
  display: block;
  height: 45px;
  border: none;
  box-sizing: border-box;
  padding: ${hasSuffix ? "0 0 0 15px" : "0 15px"};
  font-size: ${styles.fontSize.regular};
  background-color: transparent;
  overflow: hidden;
  color: inherit;
  width: 100%;

  &:focus {
    color: ${styles.color.yankeesBlue};
    outline: none;
  }
`;

export const suffixIconStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-inline-start: 15px;
  margin-inline-end: 15px;
  color: inherit;
  max-width: 24px;
  max-height: 24px;
`;
