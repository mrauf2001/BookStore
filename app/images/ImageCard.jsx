import Image from "next/image";
import Link from "next/link";

const ImageCard = ({ imageSrc, altText, link }) => {
  return (
    <Link href={link}>
      <div className="transition-transform duration-300 transform hover:scale-105">
        <Image src={imageSrc} alt={altText} width={200} height={200} className="object-cover" />
      </div>
    </Link>
  );
};

export default ImageCard;
