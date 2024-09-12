import { css } from '@emotion/react';
import CheckedSVG from '../../assets/icons/checked.svg';
import * as styles from '../../styles';
import { CheckboxProps } from './Checkbox.types';

export const labelStyles = ({ disabled }: Pick<CheckboxProps, 'disabled'>) => css`
  font: inherit;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  color: ${styles.color.slateGray};
  cursor: pointer;
  transition: all 0.2s;

  ${disabled &&
  css`
    opacity: 0.65;
    cursor: not-allowed;
  `}
`;

export const inputStyles = css`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${styles.color.white};
  margin: 0 10px 0 0;
  width: 19px;
  height: 19px;
  border: 1px solid ${styles.color.beauBlue};
  border-radius: 3px;
  box-sizing: border-box;
  transition: transform linear 0.2s;

  &:active {
    transform: scale(0.98);
  }

  &:checked {
    border: none;
    background-color: ${styles.color.lightSeaGreen};

    &:hover {
      background-color: ${styles.color.greenCrayola};
    }

    &:before {
      position: absolute;
      content: '';
      width: 11px;
      height: 8px;
      display: inline-block;
      line-height: 100%;
      background: url(${CheckedSVG.toString()});
    }
  }

  &:checked + span {
    color: ${styles.color.yankeesBlue};
  }
`;
