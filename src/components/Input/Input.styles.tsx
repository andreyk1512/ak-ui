import { css } from '@emotion/react';
import * as styles from '../../styles';

export const inputWrapperStyles = () => css`
  display: inline-flex;
  align-items: center;
  background-color: ${styles.color.aliceBlue};
  border-radius: 6px;
  color: ${styles.color.uclaBlue};
  width: 100%;
`;

export const inputStyles = () => css`
  display: block;
  height: 45px;
  border: none;
  box-sizing: border-box;
  padding: 0 15px;
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

export const suffixIconStyles = () => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-inline-end: 15px;
  color: inherit;
  max-width: 24px;
  max-height: 24px;
`;
