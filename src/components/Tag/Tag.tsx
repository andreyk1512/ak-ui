import { clsx } from 'clsx';
import { TagProps } from './Tag.types';

import styles from './Tag.module.scss';

export const Tag = ({ children, color }: TagProps) => (
  <span className={clsx(styles.tag, styles[color])}>{children}</span>
);
