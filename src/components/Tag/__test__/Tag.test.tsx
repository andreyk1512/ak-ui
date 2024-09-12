import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import * as styles from '../../../styles';
import { Tag } from '../Tag';

describe('Tag', () => {
  it('should render the tag text', () => {
    const { container } = render(<Tag color="blue">My Tag</Tag>);
    const tag = screen.getByText('My Tag');

    expect(tag).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should apply the correct styles for different colors', () => {
    // Test for blue color
    render(<Tag color="blue">Blue Tag</Tag>);
    const blueTag = screen.getByText('Blue Tag');
    expect(blueTag).toHaveStyle(`color: ${styles.color.carolinaBlue}`);
    expect(blueTag).toHaveStyle(`background-color: ${styles.color.lightSkyBlue_40}`);

    // Test for green color
    render(<Tag color="green">Green Tag</Tag>);
    const greenTag = screen.getByText('Green Tag');
    expect(greenTag).toHaveStyle(`color: ${styles.color.lightSeaGreen}`);
    expect(greenTag).toHaveStyle(`background-color: ${styles.color.lightSeaGreen_20}`);

    // Test for orange color
    render(<Tag color="orange">Orange Tag</Tag>);
    const orangeTag = screen.getByText('Orange Tag');
    expect(orangeTag).toHaveStyle(`color: ${styles.color.tigersEye}`);
    expect(orangeTag).toHaveStyle(`background-color: ${styles.color.tigersEye_20}`);

    // Test for pink color
    render(<Tag color="pink">Pink Tag</Tag>);
    const pinkTag = screen.getByText('Pink Tag');
    expect(pinkTag).toHaveStyle(`color: ${styles.color.amethyst}`);
    expect(pinkTag).toHaveStyle(`background-color: ${styles.color.amethyst_20}`);

    // Test for purple color
    render(<Tag color="purple">Purple Tag</Tag>);
    const purpleTag = screen.getByText('Purple Tag');
    expect(purpleTag).toHaveStyle(`color: ${styles.color.telemagenta}`);
    expect(purpleTag).toHaveStyle(`background-color: ${styles.color.telemagenta_20}`);
  });
});
