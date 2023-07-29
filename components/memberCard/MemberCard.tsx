import React from 'react'
import { Icons } from '..'
import { IconType } from '@/types/icontypes/icon.type'


type Team = {
    glance: {
      name: string
      image: string
      role: string
      socialHandles?:{
        twitter?:string
        linkedIn?: string
        behance?:string
        github?: string
        dribbble?: string
      }
    }
}
export default function MemberCard({glance}:Team) {
  return (
    <div className="mx-auto">
        <div className="relative w-64 sm:w-full h-[19rem] sm:h-[595px] overflow-hidden rounded-3xl border border-neutral-900 bg-white flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-full h-full">
                <img src={glance.image} alt={""} className="h-full w-auto aspect-video object-cover object-center"/>
            </div>
            <div className="flex flex-col items-center justify-center w-[90%] py-1 bg-slate-200 rounded-full border gap-2  absolute bottom-5 left-[5%]">
                <div className="flex-col justify-start items-center flex">
                    <div className="text-neutral-900 text-lg font-bold">{glance.name}</div>
                    <div className="text-neutral-900 text-[0.7rem] font-normal leading-relaxed">{glance.role}</div>
                </div>
                <div className="self-stretch justify-center items-start gap-4 inline-flex">
                    <div className="flex gap-3">
                        {
                            glance.socialHandles?.twitter &&
                            <div className="w-7 h-7 border border-slate-900 flex items-center justify-center rounded-full">
                                <a href={glance.socialHandles.twitter} target="_blank" rel="noreferrer" className="text-neutral-900 hover:text-slate-900">
                                    <Icons icon={IconType.TWITTER}/>
                                </a>
                            </div>
                        }
                        {
                            glance.socialHandles?.linkedIn &&
                            <div className="w-7 h-7 border border-slate-900 flex items-center justify-center rounded-full">
                                <a href={glance.socialHandles?.linkedIn} target="_blank" rel="noreferrer" className="text-neutral-900 hover:text-neutral-800">
                                    <Icons
                                        icon={IconType.LINKEDIN}
                                        className="cursor-pointer"
                                    />
                                </a>
                            </div>
                            
                        }
                        {
                            glance.socialHandles?.github &&
                            <div className="w-7 h-7 border border-slate-900 flex items-center justify-center rounded-full">
                                <a href={glance.socialHandles?.github} target="_blank" rel="noreferrer" className="text-neutral-900 hover:text-neutral-800">
                                    <Icons
                                        icon={IconType.GITHUB}
                                        className="cursor-pointer"
                                    />
                                </a>
                            </div>
                        }
                                                {
                            glance.socialHandles?.dribbble &&
                            <div className="w-7 h-7 border border-slate-900 flex items-center justify-center rounded-full">
                                <a href={glance.socialHandles?.dribbble} target="_blank" rel="noreferrer" className="text-neutral-900 hover:text-neutral-800">
                                    <Icons
                                        icon={IconType.DRIBBBLE}
                                        className="cursor-pointer"
                                    />
                                </a>
                            </div>
                        }
                        {
                            glance.socialHandles?.behance &&
                            <div className="w-7 h-7 border border-slate-900 flex items-center justify-center rounded-full">
                                <a href={glance.socialHandles?.behance} target="_blank" rel="noreferrer" className="text-neutral-900 hover:text-neutral-800">
                                    <Icons
                                        icon={IconType.BEHANCE}
                                        className="cursor-pointer"
                                    />
                                </a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
