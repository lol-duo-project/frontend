import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('텍스트가 잘 나오면서 렌더링이 잘 된다', () => {
    const { getByText } = render(<Footer />);
    const text = getByText(/© 2022 lolduo\.net/);
    expect(text).toBeInTheDocument();
  });

  it('클릭 할 수 있는 4 개의 버튼(로고 포함)이 존재한다', () => {
    const { getAllByRole } = render(<Footer />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(4);
  });
});
