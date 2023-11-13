import { css, SerializedStyles } from '@emotion/react';
import * as styles from '../../styles';
import { TagProps } from './Tag.types';

const colorsMap: Record<TagProps['color'], SerializedStyles> = {
  blue: css`color: ${styles.color.carolinaBlue}; background-color: ${styles.color.lightSkyBlue_40};`,
  green: css`color: ${styles.color.lightSeaGreen}; background-color: ${styles.color.lightSeaGreen_20};`,
  orange: css`color: ${styles.color.tigersEye}; background-color: ${styles.color.tigersEye_20};`,
  pink: css`color: ${styles.color.amethyst}; background-color: ${styles.color.amethyst_20};`,
  purple: css`color: ${styles.color.telemagenta}; background-color: ${styles.color.telemagenta_20};`
};

export const Tag = ({ children, color }: TagProps) => {
  const tagStyle = css`
    padding: 7px 10px;
    border-radius: 3px;
    letter-spacing: 0.36px;
    line-height: 100%;
    font-size: ${styles.fontSize.micro};
    font-weight: ${styles.fontWeight.medium};
    ${colorsMap[color]}
  `;

  return (
    <span css={tagStyle}>{children}</span>
  );
};
