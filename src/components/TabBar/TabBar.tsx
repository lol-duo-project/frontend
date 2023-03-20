import { css } from '@emotion/react';
import { card, gray200, regular20 } from '@src/styles';
import { flexCenter } from '@src/styles/display';
import { useRouter } from 'next/router';
import { TextButton } from '../Button';

export const TabBar = () => {
  const { pathname, push } = useRouter();

  const handleChangeToType = (type: 'duo' | 'solo') => {
    push({ pathname: type });
  };

  return (
    <div css={tabContainer}>
      <TextButton
        clickEnableWidth={70}
        clickEnableHeight={48}
        isActive={pathname === '/duo'}
        displaySet={flexCenter}
        fontSize={regular20}
        fontColor={gray200}
        text={'Duo'}
        onClick={() => handleChangeToType('duo')}
      />
      <TextButton
        clickEnableWidth={70}
        clickEnableHeight={48}
        displaySet={flexCenter}
        isActive={pathname === '/solo'}
        fontSize={regular20}
        fontColor={gray200}
        text={'Solo'}
        onClick={() => handleChangeToType('solo')}
      />
    </div>
  );
};

const tabContainer = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 48px;
  padding-left: 60px;
  background-color: ${card};
`;
