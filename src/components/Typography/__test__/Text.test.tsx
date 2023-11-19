import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import * as styles from '../../../styles';
import { Typography } from '../Typography';

describe('Typography.Text', () => {
  it('should render the text content', () => {
    const textValue = 'This is a text component';
    const { container } = render(<Typography.Text>{textValue}</Typography.Text>);

    const text = screen.getByText(textValue);
    expect(text).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should apply the strikethrough style', () => {
    const textValue = 'This is a strikethrough text';
    render(<Typography.Text strikethrough>{textValue}</Typography.Text>);
    const text = screen.getByText(textValue);

    expect(text).toHaveStyle('text-decoration: line-through');
  });

  it('should apply the secondary type style', () => {
    const textValue = 'This is a secondary type text';
    render(<Typography.Text type="secondary">{textValue}</Typography.Text>);
    const text = screen.getByText(textValue);

    expect(text).toHaveStyle(`color: ${styles.color.yankeesBlue}`);
  });

  it('should apply the bold style', () => {
    const textValue = 'This is a bold text';
    render(<Typography.Text bold>{textValue}</Typography.Text>);
    const text = screen.getByText(textValue);

    expect(text).toHaveStyle(`font-weight: ${styles.fontWeight.medium}`);
  });

  it('should apply the tiny style', () => {
    const textValue = 'This is a tiny text';
    render(<Typography.Text tiny>{textValue}</Typography.Text>);
    const text = screen.getByText(textValue);
    expect(text).toHaveStyle(`font-size: ${styles.fontSize.tiny}`);
  });
});
