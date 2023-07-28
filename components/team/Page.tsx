import React from 'react'


type Team = {
    glance: {
      name: string
      image: string
      role: string
      socialMedia?:{
        twitter?:string
        linkdln?: string
        Bihance?:string
        github?: string
      }
    }
}
export default function Team({glance}) {
  return (
    <div>
        <div className="w-96 h-[594px] px-4 pt-[453px] pb-4 rounded-[32px] border border-neutral-900 flex-col justify-start items-start gap-2 inline-flex">
    <div className="self-stretch h-[119px] px-[68px] py-3 bg-slate-200 rounded-[200px] border flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch h-14 flex-col justify-start items-center flex">
            <div className="self-stretch text-center text-neutral-900 text-2xl font-bold">Noel Morales</div>
            <div className="self-stretch text-center text-neutral-900 text-base font-normal leading-relaxed">Full Stack Developer</div>
        </div>
        <div className="self-stretch justify-center items-start gap-4 inline-flex">
            <div className="p-2 rounded-[102px] border border-neutral-900 justify-center items-center gap-2 flex">
                <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute">
                    </div>
                </div>
            </div>
            <div className="p-1.5 rounded-[102px] border border-neutral-900 justify-center items-center gap-2 flex">
                <div className="w-[18px] h-[18px] relative"> <img src="/desmond.jpg" alt="" /></div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
