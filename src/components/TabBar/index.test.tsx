import { render } from '@testing-library/react';
import { TabBar } from './TabBar';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('TabBar', () => {
  useRouter.mockImplementation(() => ({
    push: (type: string) => {
      pathname: type;
    },
    pathname: '/duo',
  }));

  it('렌더링이 정상적으로 된다', () => {
    const { container } = render(<TabBar />);

    expect(container).toBeInTheDocument();
  });

  it('클릭 할 수 있는 2 개의 버튼이 존재한다', () => {
    const { getAllByRole } = render(<TabBar />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2);
  });
});
