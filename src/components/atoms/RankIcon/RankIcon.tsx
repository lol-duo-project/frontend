import Image from "next/image"

interface props {
  rankNumber: number;
}

export const RankIcon = ({rankNumber}: props) => {
  return (
    <Image src={`images/svg/rank${rankNumber}.svg`} width={32} height={32} alt={`ranking ${rankNumber}`} />
  )
}