import { fireEvent, render, screen } from '@testing-library/react';
import { TextButton } from '.';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('TextButton', () => {
  const mockClickFn = jest.fn().mockImplementation(() => {
    return 'click';
  });

  useRouter.mockImplementation(() => ({
    pathname: '/duo',
  }));

  it('정상적인 props을 통해 렌더링이 정상적으로 된다', () => {
    const { container } = render(
      <TextButton clickEnableWidth="auto" clickEnableHeight={50} fontColor="black" isActive={false} text="Click Me" />
    );

    expect(container).toBeInTheDocument();
  });

  it('버튼의 onClick이 정상적으로 작동한다', () => {
    const { container } = render(
      <TextButton
        clickEnableWidth="auto"
        clickEnableHeight={50}
        fontColor="black"
        isActive={false}
        onClick={mockClickFn}
        text="버튼"
      />
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(container).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(mockClickFn).toBeCalledTimes(1);
    expect(mockClickFn()).toBe('click');
  });
});
