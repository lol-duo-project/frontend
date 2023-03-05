import React from 'react';
import { render } from '@testing-library/react';
import { ChampionSearchBoard } from '.';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(() => ({
    data: [{ name: 'Champion1', url: 'http://test1.com' }],
    status: 'success',
  })),
}));

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('ChampionSearchBoard', () => {
  it('렌더링이 정상적으로 되고, 데이터 호출이 성공한다.', () => {
    useRouter.mockImplementationOnce(() => ({
      query: { locale: 'ko_KR' },
    }));

    const { container } = render(<ChampionSearchBoard />);

    expect(container).toBeInTheDocument();
  });
});
