import React from 'react'
import { Icons } from '..'
import { IconType } from '@/types/icontypes/icon.type'


type Team = {
    glance: {
      name: string
      image: string
      role: string
      socialMedia?:{
        twitter?:string
        linkedin?: string
        behance?:string
        github?: string
      }
    }
}
export default function MemberCard({glance}:Team) {
  return (
    <div className="">
        <div className="relative w-64 sm:w-full h-[19rem] sm:h-[400px] overflow-hidden rounded-3xl border border-neutral-900 bg-white flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-full h-full">
                <img src={"./desmond.jpg"} alt={""} className="h-full w-auto aspect-video object-cover object-center"/>
            </div>
            <div className="flex flex-col items-center justify-center w-[90%] py-1 bg-slate-200 rounded-full border gap-2  absolute bottom-5 left-[5%]">
                <div className="flex-col justify-start items-center flex">
                    <div className="text-neutral-900 text-lg font-bold">Noel Morales</div>
                    <div className="text-neutral-900 text-[0.7rem] font-normal leading-relaxed">Full Stack Developer</div>
                </div>
                <div className="self-stretch justify-center items-start gap-4 inline-flex">
                    <div>
                        {
                            glance.socialMedia?.twitter &&
                            <a href={glance.socialMedia?.twitter} target="_blank" rel="noreferrer" className="text-neutral-900 hover:text-neutral-800">
                                <Icons
                                    icon={IconType.TWITTER}
                                    className="text-white cursor-pointer"
                                />
                            </a>
                        }
                        {
                            glance.socialMedia?.linkedin &&
                            <a href={glance.socialMedia?.linkedin} target="_blank" rel="noreferrer" className="text-neutral-900 hover:text-neutral-800">
                                <Icons
                                    icon={IconType.LINKEDIN}
                                    className="text-white cursor-pointer"
                                />
                            </a>
                        }
                        {
                            glance.socialMedia?.github &&
                            <a href={glance.socialMedia?.github} target="_blank" rel="noreferrer" className="text-neutral-900 hover:text-neutral-800">
                                <Icons
                                    icon={IconType.GITHUB}
                                    className="text-white cursor-pointer"
                                />
                            </a>
                        }
                        {
                            glance.socialMedia?.behance &&
                            <a href={glance.socialMedia?.behance} target="_blank" rel="noreferrer" className="text-neutral-900 hover:text-neutral-800">
                                <Icons
                                    icon={IconType.BEHANCE}
                                    className="text-white cursor-pointer"
                                />
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
