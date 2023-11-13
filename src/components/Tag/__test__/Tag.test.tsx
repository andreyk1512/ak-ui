import renderer from 'react-test-renderer';
import { Tag } from '../Tag';

it('should correctly render Tag item', () => {
  const component = renderer.create(
    <Tag color="green">ONLINE</Tag>,
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});