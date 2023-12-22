import Image from "../component/Image"

interface CardType {
  src: string;
  alt: string;
  textarea: string;
} 

export default function Card({
  src,
  alt,
  textarea,
}: CardType) {
    return (
      <div className="card_container text-center">
        <Image src={src} alt={alt} width={200} height={200} />
        <b>{textarea}</b>
      </div>
    )
  }