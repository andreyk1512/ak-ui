import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Paragraph } from '../components';

describe('Typography.Paragraph', () => {
  it('should render the paragraph text', () => {
    const { container } = render(<Paragraph>This is a paragraph</Paragraph>);
    const paragraph = screen.getByText('This is a paragraph');

    expect(paragraph).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
