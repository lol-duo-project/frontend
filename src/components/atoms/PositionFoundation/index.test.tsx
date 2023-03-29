import { render, screen } from '@testing-library/react';
import { PositionFoundation } from './PositionFoundation';

describe('PositionFoundation', () => {
  const name = 'Top';
  const url = '/images/svg/PositionTop.svg';

  it('이미지가 제대로 렌더링 되고 alt 속성과 크기가 올바른지 확인', () => {
    render(<PositionFoundation name={name} url={url} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', name);
    expect(image).toHaveAttribute('width', '24');
    expect(image).toHaveAttribute('height', '24');
  });
});
