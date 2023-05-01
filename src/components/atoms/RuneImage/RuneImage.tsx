import Image from 'next/image';

interface props {
  runeType: string;
  alt: string;
}

export const RuneImage = ({ runeType, alt }: props) => {
  return <Image src={'images/svg/PositionAdc.svg'} width={24} height={24} alt={alt} />;
};
