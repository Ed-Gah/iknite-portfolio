import Image from "next/image";
import image from "../assets/images/404.png";
import Link from "next/link";

export default function custom404() {
  return (
    <div className="w-full flex items-center flex-col">
      <Image src={image} height={400} width={400} alt="..." />
      <Link href={"/"}>Return to home</Link>
    </div>
  );
}
