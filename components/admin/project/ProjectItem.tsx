import Link from "next/link";
import React from "react";

interface Props{
  title:string;
  description:string;
  image:string;
}
export default function ProjectItem({title, description, image}:Props) {
  return (
    <tr className="text-gray-700 dark:text-gra">
  
    <td className="px-4 py-3">
      <div className="flex items-center text-sm">
        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
          <img
            className="object-cover w-full h-full"
            src={image}
            alt=""
            loading="lazy"
          />
    
        </div>
        <div>
          <p className="font-semibold">{title}</p>
         
        </div>
      </div>
    </td>
    <td className="px-4 py-3 text-sm">{description}</td>
  
    <td>
        <div className="flex justify-around">
            <button className="text-blue-500">
                Edit
            </button>
            <button className="text-red-500">
                Delete
            </button>

        </div>
    </td>
  </tr>
  );
}
