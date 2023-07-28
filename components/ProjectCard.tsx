import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
  const handleClick = () => {};

  return (
    <div
      className="flex flex-col rounded-xl overflow-hidden m-20 min-w-[200px] min-h-[200px] "
      onClick={handleClick}
    >
      <div className="flex-2 bg-haiti-50 flex items-center justify-center">
        <Image
          className="object-cover w-full h-full"
          src={project.image}
          alt={project.title}
          width={500}
          height={500}
          quality={100}
        />
      </div>
      <div className="flex-1 bg-[#1C1C22] text-haiti-50 flex flex-col items-start justify-center px-4 py-6 space-y-2">
        <h2 className="font-black text-lg">{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;