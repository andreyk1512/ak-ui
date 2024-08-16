import { Password, TextArea } from './components';
import { inputStyles, inputWrapperStyles, suffixIconStyles } from './Input.styles';
import { InputProps } from './Input.types';

export const Input = ({ suffixIcon, ...inputProps }: InputProps) => (
  <div css={inputWrapperStyles()}>
    <input {...inputProps} css={inputStyles()} />
    {suffixIcon ? <span css={suffixIconStyles()}>{suffixIcon}</span> : null}
  </div>
);

Input.Password = Password;
Input.TextArea = TextArea;
