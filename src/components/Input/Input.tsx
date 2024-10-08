import { inputStyles, inputWrapperStyles, suffixIconStyles } from './Input.styles';
import { InputProps } from './Input.types';

export const Input = ({ suffixIcon, ...inputProps }: InputProps) => (
  <div css={inputWrapperStyles}>
    <input {...inputProps} css={inputStyles(Boolean(suffixIcon))} />
    {suffixIcon ? <span css={suffixIconStyles}>{suffixIcon}</span> : null}
  </div>
);
