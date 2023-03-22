import { render, screen, fireEvent } from '@testing-library/react';
import { PositionChampSelector } from './PositionChampSelector';
import { Lane } from '../PositionSearchBoard';

describe('PositionChampSelector component', () => {
  it('초기 값이 All 인지 확인', () => {
    render(<PositionChampSelector field="Position" />);
    const positionButton = screen.getByRole('button');
    const initialLaneText = screen.getByText('All');
    expect(positionButton).toBeInTheDocument();
    expect(initialLaneText).toBeInTheDocument();
  });

  it('버튼을 클릭했을때 Top 라인 텍스트가 나오는지 해당 버튼을 클릭했을때 선택되는지 확인', () => {
    render(<PositionChampSelector field="Position" />);
    const positionButton = screen.getByRole('button');
    expect(positionButton).toBeInTheDocument();

    fireEvent.click(positionButton);
    const topLaneButton = screen.getByAltText(Lane.Top);
    expect(topLaneButton).toBeInTheDocument();

    fireEvent.click(topLaneButton);
    const topLaneText = screen.getByText(Lane.Top);
    expect(topLaneText).toBeInTheDocument();
  });
});
