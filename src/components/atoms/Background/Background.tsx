import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { background } from '@src/styles';

interface BackgroundProps {
  children: ReactNode;
}

export const Background = ({ children }: BackgroundProps) => {
  return <div css={wrapper}>{children}</div>;
};

const wrapper = css`
  width: 100vw;
  min-height: 100vh;
  margin-top: 104px;
  background-color: ${background};
`;
