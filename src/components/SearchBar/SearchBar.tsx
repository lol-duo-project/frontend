import Style, { generateClassNames } from '../../utils/Style';
import { ImageButton } from '../Button';

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

        <ImageButton
          src={'/images/svg/SearchButton.svg'}
          width={15}
          height={16}
          alt={'검색하기 버튼'}
          buttonType={'button'}
        />
      </div>
    </Style>
  );
};

const CLASSNAMES = generateClassNames({
  SearchContainer: 'search-container',
  SearchInput: 'search-input',
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
  }

  .${CLASSNAMES.SearchInput}:focus{
    outline: none;
  }
`;
