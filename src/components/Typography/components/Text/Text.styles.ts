import { css } from '@emotion/react';
import * as styles from '../../../../styles';
import { TextProps } from './Text.types';

export const textStyles = ({
  strikethrough,
  type,
  bold,
  tiny,
}: Pick<TextProps, 'strikethrough' | 'type' | 'bold' | 'tiny'>) => css`
  line-height: 100%;
  color: ${styles.color.uclaBlue};
  font-size: ${styles.fontSize.regular};
  font-weight: ${styles.fontWeight.regular};

  ${strikethrough &&
  css`
    text-decoration: line-through;
  `}

  ${type === 'secondary' &&
  css`
    color: ${styles.color.yankeesBlue};
  `}

  ${bold &&
  css`
    font-weight: ${styles.fontWeight.medium};
  `}

  ${tiny &&
  css`
    font-size: ${styles.fontSize.tiny};
  `}
`;
