import { useState } from 'react';
import { ReactComponent as EyeOffSVG } from '../../../../assets/icons/eye-off.svg';
import { ReactComponent as EyeSVG } from '../../../../assets/icons/eye.svg';
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
