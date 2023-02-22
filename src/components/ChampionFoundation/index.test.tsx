import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ChampionFoundation } from '.';

describe('ChampionSearchBoard', () => {
  const mockClickFn = jest.fn().mockImplementation(() => {
    return 'click';
  });

  it('정상적인 name, url을 통해 렌더링이 정상적으로 된다', () => {
    const { container } = render(<ChampionFoundation name={'Garen'} url={'https://test'} onClick={mockClickFn} />);

    expect(container).toBeInTheDocument();
  });

  it('버튼의 onClick이 정상적으로 작동한다', () => {
    const { container } = render(<ChampionFoundation name={'Garen'} url={'https://test'} onClick={mockClickFn} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(container).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(mockClickFn).toBeCalledTimes(1);
    expect(mockClickFn()).toBe('click');
  });
});
