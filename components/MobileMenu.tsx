import Link from "next/link";
type Props = {
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};
export const MobileMenu = ({ setShowNav }: Props) => {
  return (
    <>
      <div className=" bg-white h-screen w-[300px] fixed top-0 flex flex-col gap-1 p-5 rounded-sm right-0">
        <div className="p-2"></div>
        <Link
          href={"/"}
          onClick={() => {
            setShowNav(false);
          }}
          className="p-2 border-b hover:bg-haiti-100 rounded"
        >
          Home
        </Link>
        <Link
          href={"https://iknite.space"}
          onClick={() => {
            setShowNav(false);
          }}
          className="p-2 border-b hover:bg-haiti-100 rounded"
        >
          About
        </Link>
        <Link
          href={"/projects"}
          onClick={() => {
            setShowNav(false);
          }}
          className="p-2 border-b hover:bg-haiti-100 rounded"
        >
          Projects
        </Link>
        <Link
          href={"/team"}
          onClick={() => {
            setShowNav(false);
          }}
          className="p-2 border-b hover:bg-haiti-100 rounded"
        >
          Team
        </Link>
        <Link
          href={"/events"}
          onClick={() => {
            setShowNav(false);
          }}
          className="p-2 border-b hover:bg-haiti-100 rounded"
        >
          Events
        </Link>
      </div>
      <div
        onClick={() => {
          setShowNav(false);
        }}
        className="w-full h-screen bg-black fixed top-0 left-0 -z-10 opacity-70"
      ></div>
    </>
  );
};
