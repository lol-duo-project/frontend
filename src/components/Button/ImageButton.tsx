import { MouseEventHandler } from 'react';
import Image from 'next/image';
import Style, { generateClassNames } from '@src/utils/Style';

interface Props {
  src: string;
  width: number;
  height: number;
  alt: string;
  buttonType?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const ImageButton = (props: Props) => {
  const { src, width, height, alt, buttonType, onClick, ...rest } = props;

  return (
    <Style css={css()}>
      <button className={CLASSNAMES.SearchButton} type={buttonType} onClick={onClick ? onClick : () => {}} {...rest}>
        <Image src={src} width={width} height={height} alt={alt} />
      </button>
    </Style>
  );
};

const CLASSNAMES = generateClassNames({
  SearchButton: 'search-button',
});

const css = () => `
  .${CLASSNAMES.SearchButton}{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
