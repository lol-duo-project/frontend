import Style, { generateClassNames } from '../../utils/Style';
import Image from 'next/image';

interface Props {
  width: string;
  height: string;
  placeholder: string;
  fontColor: string;
}

export const SearchBar = (props: Props) => {
  const {
    width = '100px',
    height = '33px',
    placeholder = '찾으시는 챔피언 이름을 입력해주세요.',
    fontColor = 'White',
    ...rest
  } = props;

  return (
    <Style css={css(props)}>
      <div className={CLASSNAMES.SearchContainer}>
        <label htmlFor="search"></label>
        <input id="search" className={CLASSNAMES.SearchInput} placeholder={placeholder} {...rest}></input>

        {/* <button className={CLASSNAMES.SearchButton} type="button">
          <Image src={'/images/svg/SearchButton.svg'} width="14" height="15" alt="Search Button" />
        </button> */}
      </div>
    </Style>
  );
};

const CLASSNAMES = generateClassNames({
  SearchContainer: 'search-container',
  SearchInput: 'search-input',
  SearchButton: 'search-button',
});

const css = (props: Props) => `
  .${CLASSNAMES.SearchContainer}{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${props.width};
    height: ${props.height};
    border-bottom: 1px solid #B5B5B5;
    margin-bottom: 10px;
  }

  .${CLASSNAMES.SearchInput}{
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: ${props.fontColor};
    border: none;
    padding-right: 20px;
  }

  .${CLASSNAMES.SearchInput}:focus{
    outline: none;
  }

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
