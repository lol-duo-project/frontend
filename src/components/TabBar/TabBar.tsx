import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { TextButton } from '../Button';

export const TabBar = () => {
  const { pathname, query, push } = useRouter();

  const handleChangeToType = (type: 'duo' | 'solo') => {
    push({ pathname: type });
  };

  return (
    <div css={tabContainer}>
      <TextButton
        clickEnableWidth={70}
        clickEnableHeight={48}
        isActive={pathname === '/duo'}
        fontColor="#676767"
        text={'Duo'}
        onClick={() => handleChangeToType('duo')}
      />
      <TextButton
        clickEnableWidth={70}
        clickEnableHeight={48}
        isActive={pathname === '/solo'}
        fontColor="#676767"
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
`;
