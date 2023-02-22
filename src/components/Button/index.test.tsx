import { fireEvent, render, screen } from '@testing-library/react';
import { ImageButton } from './ImageButton';

describe('ImageButton', () => {
  const mockClickFn = jest.fn().mockImplementation(() => {
    return 'click';
  });

  it('정상적인 props을 통해 렌더링이 정상적으로 된다', () => {
    const { container } = render(
      <ImageButton
        src={'https://test'}
        width={20}
        height={20}
        onClick={mockClickFn}
        alt={'이미지 버튼'}
        buttonType={'button'}
      />
    );

    expect(container).toBeInTheDocument();
  });

  it('버튼의 onClick이 정상적으로 작동한다', () => {
    const { container } = render(
      <ImageButton
        src={'https://test'}
        width={20}
        height={20}
        onClick={mockClickFn}
        alt={'이미지 버튼'}
        buttonType={'button'}
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
