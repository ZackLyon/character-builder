import { render } from '@testing-library/react';
import Character from './Character';

it('should display the character on the screen', () => {
  const { container } = render(
    <Character head='angry' middle='blue' leg='dog' />
  );

  expect(container).toMatchSnapshot();
});
