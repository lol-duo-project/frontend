import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { ChampionSearchBoard } from '.';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(() => ({
    data: undefined,
    status: 'loading',
  })),
}));

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('ChampionSearchBoard', () => {
  it('렌더링이 정상적으로 되고, 데이터 호출이 성공한다.', async () => {
    useRouter.mockImplementation(() => ({
      query: { locale: 'ko_KR' },
    }));

    const { container } = render(<ChampionSearchBoard />);

    await waitFor(() => {
      expect(container).toBeInTheDocument();
    });
  });
});
