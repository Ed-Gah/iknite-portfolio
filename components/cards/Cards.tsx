import { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
type Props = {
  image: string;
  title: string;
  details: string;
  id?: string;
};
/**
 * This function component expects three props
 * @param,image title, details
 * @returns
 */
const Cards = ({ image, title, details, id }: Props) => {
  const router = useRouter()
  return (
    <div onClick={()=>{
      router.push(`/events/${id}`)
    }} className="max-w-[566px]  bg-white overflow-hidden rounded-[16px] shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
<<<<<<< HEAD
          className="rounded-t-lg"
          src={image}
          alt={title}
          width={566}
          height={566}
=======
          className="rounded-t-lg max-h-[400px] object-cover"
          src={image}
          alt={title}
          width={566}
>>>>>>> c6a70a95c382cd054756b4a5356f4a3998913d64
        />
      </a>
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
