import { render } from '@testing-library/react';
import { Header } from './Header';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Header', () => {
  it('Header가 정상적으로 렌더링된다', () => {
    useRouter.mockImplementation(() => ({
      query: { type: 'solo' },
    }));

    const { container } = render(<Header />);

    expect(container).toBeInTheDocument();
  });
});
