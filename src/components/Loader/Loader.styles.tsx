import { css, SerializedStyles } from '@emotion/react';
import * as styles from '../../styles';
import { LoaderSize } from './Loader.types';

const sizeMap: Record<LoaderSize, SerializedStyles> = {
  default: css`
    width: 40px;
    height: 40px;
  `,
  small: css`
    width: 24px;
    height: 24px;
  `,
};

export const spinnerStyles = (size: LoaderSize) => css`
  animation: spin 1s linear infinite;
  color: ${styles.color.lightSeaGreen};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${sizeMap[size]}
`;

export const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${styles.color.yankeesBlue};
`;
