import { css } from '@emotion/react';
import * as styles from '../../styles';

export const containerStyles = css`
  border-radius: 6px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: ${styles.color.white};
  border: 1px solid ${styles.color.brightGray_70};
`;

export const headerStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 20px;
  box-sizing: border-box;
  cursor: pointer;

  h3 {
    margin: 0;
  }
`;

export const iconStyles = (expanded: boolean) => css`
  margin: -6px;
  transition: transform linear 0.2s;
  transform: rotate(0turn);

  & {
    circle {
      transition: fill linear 0.2s;
    }
    path {
      transition: fill linear 0.2s;
    }
  }

  ${expanded &&
  css`
    & {
      transform: rotate(0.5turn);

      circle {
        fill: ${styles.color.lightSeaGreen};
      }
      path {
        fill: ${styles.color.white};
      }
    }
  `}
`;

export const bodyStyles = (expanded: boolean) => css`
  visibility: hidden;
  overflow: hidden;
  max-height: 0;
  transition: all 0.2s linear;
  border-top: 0 solid ${styles.color.brightGray_85};
  box-sizing: border-box;

  ${expanded &&
  css`
    visibility: visible;
    border-top-width: 1px;
  `}
`;

export const bodyInnerStyles = css`
  margin: 20px;
`;
