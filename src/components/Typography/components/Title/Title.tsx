import { titleStyles } from './Title.styles';
import { TitleProps } from './Title.types';

export const Title = ({ children, type = 1 }: TitleProps) => {
  const styles = titleStyles(type);

  switch (type) {
    default:
    case 1: {
      return <h1 css={styles}>{children}</h1>;
    }
    case 2: {
      return <h2 css={styles}>{children}</h2>;
    }
    case 3: {
      return <h3 css={styles}>{children}</h3>;
    }
    case 4: {
      return <h4 css={styles}>{children}</h4>;
    }
    case 5: {
      return <h5 css={styles}>{children}</h5>;
    }
  }
};
