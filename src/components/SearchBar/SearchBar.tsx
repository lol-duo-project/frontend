import { css } from '@emotion/react';
import React, { ChangeEventHandler, ForwardedRef } from 'react';
import { ImageButton } from '../Button/ImageButton';

export interface Props {
  width: string;
  height: string;
  placeholder?: string;
  fontColor: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBar = React.forwardRef((props: Props, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    width = '100px',
    height = '33px',
    placeholder = '찾으시는 챔피언 이름을 입력해주세요.',
    fontColor = 'White',
    onChange = () => {},
    ...rest
  } = props;

  return (
    <div css={searchContainer(props)}>
      <label htmlFor="search"></label>
      <input
        id="search"
        css={searchInput(props)}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        data-testid={'input'}
        {...rest}
      ></input>

      <ImageButton
        src={'/images/svg/SearchButton.svg'}
        width={15}
        height={16}
        alt={'검색하기 버튼'}
        buttonType={'button'}
      />
    </div>
  );
});

const searchContainer = (props: Props) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${props.width};
  min-height: ${props.height};
  border-bottom: 1px solid #b5b5b5;
  margin-bottom: 10px;
`;

const searchInput = (props: Props) => css`
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: ${props.fontColor};
  border: none;

  &:focus {
    outline: none;
  }
`;
