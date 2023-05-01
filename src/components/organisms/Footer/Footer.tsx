import { css } from '@emotion/react';
import { ImageButton, TextButton } from '../../atoms/Button';
import { gray050, regular12 } from '@src/styles';
import { flexAlignCenter } from '@src/styles/display';

export const Footer = () => {
  return (
    <div css={footerWrapper}>
      <div css={leftFooter}>
        <ImageButton
          src={'/images/svg/LogoWhite.svg'}
          buttonClass={imageButtonWrapper}
          width={165}
          height={32}
          alt={'LOL Duo Logo'}
          buttonType={'button'}
        />
        <p css={text}>
          © 2022 lolduo.net isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or
          anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are
          trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc
        </p>
      </div>
      <div css={rightFooter}>
        <TextButton
          clickEnableWidth={70}
          clickEnableHeight={22}
          displaySet={flexAlignCenter}
          fontColor="#E5E5E5"
          fontSize={regular12}
          text={'Contact us'}
          isActive={false}
        />

        <TextButton
          clickEnableWidth={70}
          clickEnableHeight={22}
          displaySet={flexAlignCenter}
          fontColor="#E5E5E5"
          fontSize={regular12}
          text={'About us'}
          isActive={false}
        />

        <TextButton
          clickEnableWidth={70}
          clickEnableHeight={22}
          displaySet={flexAlignCenter}
          fontColor="#E5E5E5"
          fontSize={regular12}
          text={'Language'}
          isActive={false}
        />
      </div>
    </div>
  );
};

const footerWrapper = css`
  width: 100vw;
  height: 245px;
  background-color: #212121;
  padding: 23px 60px 101px 60px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const leftFooter = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const imageButtonWrapper = css`
  width: 165px;
  height: 32px;
`;

const text = css`
  width: 100%;
  max-width: 580px;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 120%;
  letter-spacing: 1.3px;
  color: ${gray050};
`;

const rightFooter = css`
  width: 200px;
  height: 80px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
