import { render, fireEvent } from '@testing-library/react';
import { PositionSearchBoard } from './index';
import { Lane } from './PositionSearchBoard';

describe('PositionSearchBoard', () => {
  it('should select lane and call onSelect handler', () => {
    const onSelect = jest.fn(); // onSelect 핸들러 mock 함수 생성
    const { getByAltText } = render(<PositionSearchBoard onSelect={onSelect} />);

    // 초기 상태에서 All 버튼이 선택되어 있음을 확인
    const allButton = getByAltText(Lane.All);
    expect(allButton).toHaveClass('activeLaneButton');

    // Mid 버튼 클릭해서 선택되도록 함
    const midButton = getByAltText(Lane.Mid);
    fireEvent.click(midButton);

    // Mid 버튼이 선택되어 있음을 확인
    expect(midButton).toHaveClass('activeLaneButton');

    // onSelect 핸들러가 Mid 레인을 인자로 호출되었는지 확인
    expect(onSelect).toHaveBeenCalledWith(Lane.Mid);
  });
});
