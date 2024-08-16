import { css } from '@emotion/react';
import * as styles from '../../styles';
import { ButtonProps } from './Button.types';

export const loaderStyles = ({ hidden }: { hidden: boolean }) => css`
  height: 12px;
  width: 12px;
  color: currentColor;
  display: inline-block;
  border: 1px solid;
  border-radius: 50%;
  margin-inline-end: 8px;
  border-top-color: transparent;
  animation: rotate 1s linear infinite;
  transition: all 0.2s;

  ${hidden &&
  css`
    scale: 0;
    width: 0;
    margin-inline-end: 0;
  `};

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const buttonStyles = ({ size, type, ghost }: Pick<ButtonProps, 'size' | 'type' | 'ghost'>) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  box-sizing: border-box;
  width: auto;
  height: 45px;
  cursor: pointer;
  user-select: none;
  text-align: center;
  line-height: 100%;
  padding: 0 15px;
  border-radius: 5px;
  font-style: normal;
  font-size: ${styles.fontSize.regular};
  background-color: transparent;
  box-shadow: none;
  border: 1px solid ${styles.color.lightSeaGreen};
  color: ${styles.color.yankeesBlue};
  transition: all 0.2s;

  &:hover {
    background-color: ${styles.color.lightSeaGreen};
    border-color: ${styles.color.lightSeaGreen};
    color: ${styles.color.white};
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  ${size === 'small' &&
  css`
    padding: 6px 15px;
    border-radius: 3px;
    height: 27px;
  `}

  ${type === 'default' &&
  css`
    ${ghost &&
    css`
      color: ${styles.color.white};
    `}
  `}

  ${type === 'primary' &&
  css`
    color: ${styles.color.white};
    background-color: ${styles.color.lightSeaGreen};
    border: 1px solid ${styles.color.lightSeaGreen};
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    &:hover {
      background-color: ${styles.color.greenCrayola};
      border-color: ${styles.color.greenCrayola};
    }

    ${ghost &&
    css`
      color: ${styles.color.white};
    `}
  `}

    ${type === 'secondary' &&
  css`
    color: ${styles.color.white};
    background-color: ${styles.color.tuftsBlue};
    border: 1px solid ${styles.color.tuftsBlue};

    &:hover {
      background-color: ${styles.color.greenBlue};
      border-color: ${styles.color.greenBlue};
    }
  `}

  ${ghost &&
  css`
    background-color: transparent;
  `}
`;
