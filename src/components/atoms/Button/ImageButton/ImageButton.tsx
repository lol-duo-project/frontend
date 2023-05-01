import { MouseEventHandler } from 'react';
import Image from 'next/image';
import { css, SerializedStyles } from '@emotion/react';

interface Props {
  src: string;
  buttonClass?: SerializedStyles;
  width: number;
  height: number;
  alt: string;
  buttonType?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const ImageButton = ({ src, buttonClass, width, height, alt, buttonType, onClick, ...rest }: Props) => {
  return (
    <button
      css={[imageButtonContainer, buttonClass]}
      type={buttonType}
      onClick={onClick ? onClick : () => {}}
      {...rest}
    >
      <Image src={src} width={width} height={height} alt={alt} />
    </button>
  );
};

const imageButtonContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
