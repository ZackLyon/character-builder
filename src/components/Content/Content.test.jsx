import { render } from '@testing-library/react';
import Content from './Content';

it('should display the content on the screen', () => {
  const { container } = render(
    <Content
      catchPhrases={['something', 'something else']}
      headCount={3}
      middleCount={2}
      legCount={5}
    />
  );

  expect(container).toMatchSnapshot();
});
