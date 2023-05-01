import Image from 'next/image';

interface props {
  url: string;
  alt: string;
}

export const ChampionThumbnail = ({ url, alt }: props) => {
  return <Image src={'images/svg/PositionAdc.svg'} width={72} height={72} alt={alt} />;
};
