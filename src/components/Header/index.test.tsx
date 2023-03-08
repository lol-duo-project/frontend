import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('Header가 정상적으로 렌더링된다', () => {
    const { container } = render(<Header />);

    expect(container).toBeInTheDocument();
  });
});
