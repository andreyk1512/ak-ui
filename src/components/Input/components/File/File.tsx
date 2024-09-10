import { ChangeEventHandler, MouseEventHandler, useRef } from 'react';
import { FileProps } from './File.types';
import { inputStyles, labelStyles } from './File.styles';
import FileIcon from '../../../../assets/icons/file.svg?react';
import CrossIcon from '../../../../assets/icons/cross.svg?react';

export const File = ({ name, placeholder, value, onChange }: FileProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { files } = event.target;

    if (!onChange) {
      return;
    }

    if (!files || !files.length) {
      return onChange(null);
    }

    return onChange(files[0]);
  };

  const handleReset: MouseEventHandler = (event) => {
    event.preventDefault();

    if (!onChange) {
      return;
    }

    if (inputRef.current) {
      inputRef.current.value = '';
    }

    onChange(null);
  };

  return (
    <label css={labelStyles}>
      <input css={inputStyles} ref={inputRef} type="file" name={name} onChange={handleChange} />
      <FileIcon />
      {value?.name ?? placeholder}
      {value ? <CrossIcon aria-label="remove-icon" width="12" height="12" onClick={handleReset} /> : null}
    </label>
  );
};
