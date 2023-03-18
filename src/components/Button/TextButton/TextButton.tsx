import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

interface Props {
  clickEnableWidth: number | string;
  clickEnableHeight: number | string;
  fontColor: string;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export const TextButton = (props: Props) => {
  const { pathname } = useRouter();
  const { isActive, onClick, text } = props;
  return (
    <button
      css={[textButtonContainer(props), isActive ? active : '']}
      type="button"
      onClick={onClick ? onClick : () => {}}
    >
      {text}
    </button>
  );
};

const textButtonContainer = (props: Props) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${typeof props.clickEnableWidth === 'string' ? props.clickEnableWidth : props.clickEnableWidth + 'px'};
  height: ${typeof props.clickEnableHeight === 'string' ? props.clickEnableHeight : props.clickEnableHeight + 'px'};
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  cursor: pointer;
  color: ${props.fontColor};
  background-color: inherit;

  &:hover {
    color: #e5e5e5;
  }
`;

const active = css`
  color: #e5e5e5;
  border-bottom: 2px solid #e5e5e5;
`;
