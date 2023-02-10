import Style, { generateClassNames } from '@/utils/Style';

// svg
import SearchButton from '../../../public/svg/SearchButton.svg';

interface Props {
  id?: string;
}

export function ChampionSearchBoard({ id }: Props) {
  const tempChampions = new Array<Object>(50).fill({
    championName: 'Garen',
    championThumbnail: undefined,
  });

  return (
    <Style css={css}>
      <section id={id} className={CLASSNAMES.ChampionSearchBoard}>
        <div className={CLASSNAMES.SearchContainer}>
          <label htmlFor="search"></label>
          <input className={CLASSNAMES.SearchInput} type="string" placeholder="가렌" id="search"></input>

          <button className={CLASSNAMES.searchButton} type="button">
            <SearchButton />
          </button>
        </div>

        <div className={CLASSNAMES.ChampionContainer}>
          {tempChampions.map((champ, index) => {
            return <div key={index} className={CLASSNAMES.ChampionCard} />;
          })}
        </div>
      </section>
    </Style>
  );
}

const CLASSNAMES = generateClassNames({
  ChampionSearchBoard: 'champion-search-board',
  SearchContainer: 'search-container',
  ChampionContainer: 'champion-container',
  ChampionCard: 'champion-card',
  SearchInput: 'search-input',
  searchButton: 'search-button',
});

const css = `
	.${CLASSNAMES.ChampionSearchBoard} {
    display: flex;
    flex-direction: column;
		width: 244px;
    height: 253px;
    padding: 16px;
    background-color: #2F2F2F;
    border-radius: 16px;
	}
  
  .${CLASSNAMES.SearchContainer}{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 33px;
    border-bottom: 1px solid #B5B5B5;
    margin-bottom: 10px;
  }

  .${CLASSNAMES.ChampionContainer}{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 4px;
    width: 100%;
    place-items: center;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .${CLASSNAMES.ChampionCard} {
		width: 36px;
    height: 36px;
    background-color: lightcoral;
    border: 1px solid white;
    cursor: pointer;
	}

  .${CLASSNAMES.SearchInput}{
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: white;
    border: none;
  }

  .${CLASSNAMES.SearchInput}:focus{
    outline: none;
  }

  .${CLASSNAMES.searchButton}{
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
