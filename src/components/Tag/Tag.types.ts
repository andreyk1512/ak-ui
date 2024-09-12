import { ReactNode } from 'react';

export type TagColor = 'blue' | 'green' | 'orange' | 'purple' | 'pink';

export type TagProps = {
  children: ReactNode;
  color: TagColor;
};
