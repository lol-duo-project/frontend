import { render } from '@testing-library/react';
import { Background } from './Background';

describe('Background', () => {
  it('렌더링이 잘 된다', () => {
    const { getByText } = render(<Background>Test</Background>);
    expect(getByText('Test')).toBeInTheDocument();
  });
});
