export * from './Input';
export * from './Input.types';

import { Password, TextArea, File } from './components';
import { Input as OriginInput } from './Input';

export type InputProps = typeof OriginInput & {
  Password: typeof Password;
  TextArea: typeof TextArea;
  File: typeof File;
};

export const Input = OriginInput as InputProps;
Input.Password = Password;
Input.TextArea = TextArea;
Input.File = File;
