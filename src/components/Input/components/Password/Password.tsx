import { useState } from 'react';
import EyeOffSVG from '../../../../assets/icons/eye-off.svg?react';
import EyeSVG from '../../../../assets/icons/eye.svg?react';
import { Input } from '../../Input';
import { visibilityIconWrapperStyles } from './Password.styles';
import { PasswordProps } from './Password.types';

export const Password = ({ ...inputProps }: PasswordProps) => {
  const [visible, setVisible] = useState(false);

  const suffixIcon = (
    <span
      aria-label="visibility-icon"
      css={visibilityIconWrapperStyles()}
      onClick={() => setVisible((prevState) => !prevState)}
    >
      {visible ? <EyeSVG /> : <EyeOffSVG />}
    </span>
  );

  return <Input {...inputProps} type={visible ? 'text' : 'password'} suffixIcon={suffixIcon} />;
};
