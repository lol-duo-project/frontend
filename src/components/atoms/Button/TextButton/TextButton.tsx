import { css } from '@emotion/react';
import { gray050 } from '@src/styles';
import { MouseEventHandler } from 'react';

interface Props {
  clickEnableWidth: number | string;
  clickEnableHeight: number | string;
  displaySet?: string;
  fontColor: string;
  fontSize?: string;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export const TextButton = (props: Props) => {
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
  ${props.displaySet}
  width: ${typeof props.clickEnableWidth === 'string' ? props.clickEnableWidth : props.clickEnableWidth + 'px'};
  height: ${typeof props.clickEnableHeight === 'string' ? props.clickEnableHeight : props.clickEnableHeight + 'px'};
  border: none;
  line-height: 120%;
  cursor: pointer;
  background-color: inherit;
  color: ${props.fontColor};
  ${props.fontSize};

  &:hover {
    color: ${gray050};
  }
`;

const active = css`
  color: ${gray050};
  border-bottom: 2px solid ${gray050};
`;
