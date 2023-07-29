import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
type Props = {
  image: StaticImageData;
  title: string;
  details: string;
  id: string;
};
/**
 * This function component expects three props
 * @param,image title, details
 * @returns
 */
const Cards = ({ image, title, details, id }: Props) => {
  return (
    <div className="max-w-lg bg-white overflow-hidden rounded-[16px] shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/events/${id}`}>
        <Image className="rounded-t-lg" src={image} alt="" />
      </Link>
      <div className="p-5">
        <Link href={`/events/${id}`}>
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 text-[18px] font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          {details}
        </p>
      </div>
    </div>
  );
};

export default Cards;
