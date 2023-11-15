import { ChangeEventHandler, ReactNode } from 'react';

export type CheckboxProps = {
  name?: string;
  label: ReactNode;
  value?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
