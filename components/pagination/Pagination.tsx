import React from 'react'

export default function Pagination() {
  return (
    <div>
        <div className="w-[1205px] h-[38px] justify-between items-start gap-[190px] inline-flex">
    <div className="flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-0.5" />
        <div className="self-stretch pr-1 pt-4 justify-start items-center gap-3 inline-flex">
            <div className="w-5 h-5 relative" />
            <div className="text-gray-500 text-sm font-medium leading-tight">Previous</div>
        </div>
    </div>
    <div className="justify-start items-start flex gap-10">
        <div className="px-[17px] py-[9px] border flex-col justify-center items-center inline-flex">
            <div className="text-center text-zinc-500 text-sm font-medium leading-tight">1</div>
        </div>
        <div className="px-[17px] py-[9px] border border-purple-500 flex-col justify-center items-center inline-flex">
            <div className="text-center text-purple-500 text-sm font-medium leading-tight">2</div>
        </div>
        <div className="px-[17px] py-[9px] border flex-col justify-center items-center inline-flex">
            <div className="text-center text-zinc-500 text-sm font-medium leading-tight">3</div>
        </div>
        <div className="px-[17px] py-[9px] border flex-col justify-center items-center inline-flex">
            <div className="text-center text-zinc-500 text-sm font-medium leading-tight">...</div>
        </div>
        <div className="px-[17px] py-[9px] border flex-col justify-center items-center inline-flex">
            <div className="text-center text-zinc-500 text-sm font-medium leading-tight">8</div>
        </div>
        <div className="px-[17px] py-[9px] border flex-col justify-center items-center inline-flex">
            <div className="text-center text-zinc-500 text-sm font-medium leading-tight">9</div>
        </div>
        <div className="px-[17px] py-[9px] border flex-col justify-center items-center inline-flex">
            <div className="text-center text-zinc-500 text-sm font-medium leading-tight">10</div>
        </div>
    </div>
    <div className="flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-0.5" />
        <div className="self-stretch pl-1 pt-4 justify-start items-center gap-3 inline-flex">
            <div className="text-gray-500 text-sm font-medium leading-tight">Next</div>
            <div className="w-5 h-5 relative" />
        </div>
    </div>
</div>
    </div>
  )
}
