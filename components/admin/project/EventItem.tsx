import Link from "next/link";
import React from "react";

interface Props {
  id: string;
  cover_image: string;
  title: string;
  date: string;
}

export default function EventItem({ id, cover_image, title, date }: Props) {
  return (
    <tr className="text-gray-700 dark:text-gray-400">
      <td className="">
        <div className="relative hidden w-40 rounded-full md:block">
          <img
            className="h-full w-full object-cover"
            src={cover_image}
            alt=""
            loading="lazy"
          />
          <div
            className="absolute inset-0 rounded-full shadow-inner"
            aria-hidden="true"
          ></div>
        </div>{" "}
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          <p className="font-semibold">{title}</p>
        </div>
      </td>
      <td className="px-4 py-3 text-sm">{date}</td>

      <td className="px-3">
        <div className="flex justify-around gap-2">
          <Link href={"/organizer/" + id} className="text-blue-500">
            Edit
          </Link>
          <button className="text-red-500">Unpublish</button>
        </div>
      </td>
    </tr>
  );
}
