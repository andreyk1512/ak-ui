import {forwardRef} from 'react';

// eslint-disable-next-line react/display-name
const SvgrMock = forwardRef<HTMLSpanElement>((props, ref) => <span ref={ref} {...props} />);

export default SvgrMock;
