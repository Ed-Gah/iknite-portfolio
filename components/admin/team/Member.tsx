import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  role: string;
  image: string;
}
export default function Member({name, role, image}:Props) {
  return (
    <tr className="text-white">
  
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
          <p className="font-semibold">{name}</p>
         
        </div>
      </div>
    </td>
    <td className="px-4 py-3 text-sm">{role} </td>
  
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
