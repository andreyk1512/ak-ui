import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Typography } from '../Typography';

describe('Typography.Paragraph', () => {
  it('should render the paragraph text', () => {
    const { container } = render(<Typography.Paragraph>This is a paragraph</Typography.Paragraph>);
    const paragraph = screen.getByText('This is a paragraph');

    expect(paragraph).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
