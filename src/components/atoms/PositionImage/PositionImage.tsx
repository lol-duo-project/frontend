import Image from 'next/image';

interface props {
  position: 'top' | 'mid' | 'adc' | 'support' | 'jungle';
  alt: string;
}

export const PositionImage = ({ position, alt }: props) => {
  return <Image src={`images/svg/champion-position-${position}.svg`} width={24} height={24} alt={alt} />;
};
