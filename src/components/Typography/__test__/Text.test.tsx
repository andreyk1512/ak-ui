import { render } from '@testing-library/react';
import { Typography } from '../Typography';

describe('Typography.Text', () => {
  it('should correctly render span element with content', () => {
    const children = 'Lorem ipsum dolor sit amet...';
    const { container } = render(<Typography.Text>{children}</Typography.Text>);

    expect(container.querySelector('span')?.textContent).toBe(children);
    expect(container.firstChild).toMatchSnapshot();
  });
});
