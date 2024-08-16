import { textAreaStyles } from './TextArea.styles';
import { TextAreaProps } from './TextArea.types';

export const TextArea = ({ ...textAreaProps }: TextAreaProps) => <textarea {...textAreaProps} css={textAreaStyles()} />;
