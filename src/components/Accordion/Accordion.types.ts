import { ReactNode } from 'react';

export type AccordionProps = {
  id?: string;
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
};
