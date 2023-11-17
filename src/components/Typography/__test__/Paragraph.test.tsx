import { render } from '@testing-library/react';
import { Typography } from '../Typography';

describe('Typography.Paragraph', () => {
  it('should correctly render p element with content', () => {
    const children = 'Lorem ipsum dolor sit amet...';
    const { container } = render(<Typography.Paragraph>{children}</Typography.Paragraph>);

    expect(container.querySelector('p')?.textContent).toBe(children);
    expect(container.firstChild).toMatchSnapshot();
  });
});
