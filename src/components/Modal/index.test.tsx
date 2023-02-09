import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from '.';

describe('Modal', () => {
  it('id값을 전달 후 렌더링이 정상적으로 된다', () => {
    render(<Modal id="test">테스트입니다.</Modal>);

    const modalContainer = document.getElementById('test');
    expect(modalContainer).toBeInTheDocument();

    expect(modalContainer!.innerHTML).toEqual('테스트입니다.');
  });
});
