import { useId } from 'react';
import { inputStyles, labelStyles } from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox = ({ name, label, value, disabled, onChange }: CheckboxProps) => {
  const id = useId();

  return (
    <label htmlFor={id} css={labelStyles({ disabled })}>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={value}
        disabled={disabled}
        onChange={onChange}
        css={inputStyles}
      />
      <span>{label}</span>
    </label>
  );
};
