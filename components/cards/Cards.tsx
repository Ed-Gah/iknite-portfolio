import { StaticImageData } from "next/image";
import Image from "next/image";
type Props = {
  image: StaticImageData;
  title: string;
  details: string;
};
/**
 * This function component expects three props
 * @param,image title, details
 * @returns
 */
export const Cards = ({ image, title, details }: Props) => {
  return (
    <div className="max-w-lg bg-white overflow-hidden rounded-[16px] shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image className="rounded-t-lg" src={image} alt="" />
      </a>
      <div className="p-5">
        <a href="/">
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 text-[18px] font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          {details}
        </p>
      </div>
    </div>
  );
};
