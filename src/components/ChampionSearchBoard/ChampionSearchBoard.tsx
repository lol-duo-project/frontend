import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useMemo, useRef, useState } from 'react';

// util
import Style, { generateClassNames } from '@src/utils/Style';
import { getChoseong } from '@src/utils/hangeul';

// api
import { getChampionList } from '@src/api/instance/championList';

// component
import { ChampionFoundation } from '../ChampionFoundation';
import { SearchBar } from '../SearchBar';

// interface
import { Champion } from '@src/api/instance/championList/interface';

export function ChampionSearchBoard() {
  const { locale } = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchedChampList, setSearchedChampList] = useState<Champion[] | undefined>(undefined);

  // fetch
  const { data, status } = useQuery(['championList'], () => getChampionList({ size: 36, locale }), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const championList: Champion[] = useMemo(() => {
    setSearchedChampList(data?.data);
    return data?.data;
  }, [data]);

  const getAutoCompleteResult = () => {
    if (inputRef?.current) {
      if (inputRef.current.value === '') {
        setSearchedChampList(championList);
        return;
      }

      const currentValue = inputRef.current.value.toLowerCase();
      const filteredList = championList.filter(list => {
        let result = false;

        for (let i = 0; i < list?.name.length; i++) {
          const champName = list?.name[i].toLowerCase();
          const choseong = getChoseong(champName);

          if (champName.includes(currentValue) || choseong.includes(currentValue)) {
            result = true;
            break;
          }
        }

        return result;
      });

      setSearchedChampList(filteredList);
    }
  };

  return (
    <Style css={css}>
      <section className={CLASSNAMES.ChampionSearchBoard}>
        <SearchBar
          width="100%"
          height="33px"
          placeholder="챔피언 이름을 입력하세요."
          fontColor="White"
          ref={inputRef}
          onChange={getAutoCompleteResult}
        />

        <div className={CLASSNAMES.ChampionContainer}>
          {searchedChampList &&
            searchedChampList.map(champ => {
              return <ChampionFoundation key={champ.id} name={champ.id} url={champ.url} onClick={() => () => {}} />;
            })}
        </div>
      </section>
    </Style>
  );
}

const CLASSNAMES = generateClassNames({
  ChampionSearchBoard: 'champion-search-board',
  ChampionContainer: 'champion-container',
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
`;
