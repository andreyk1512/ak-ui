import { InputProps } from '../../Input.types';

export type PasswordProps = Omit<InputProps, 'type' | 'suffixIcon'>;
