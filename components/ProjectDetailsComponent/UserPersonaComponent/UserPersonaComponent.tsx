

export default function UserPersonaComponent(){

    return (
        <section className="mt-44 h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-7 gap-y-8 gap-x-5 [&>*]:w-[24rem] [&>*]:h-full [&>*]:rounded-3xl [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:text-white">
            <div className="bg-rose-500 row-span-3 col-start-1 row-start-1 row-end-4">1</div>
            <div className="bg-rose-500 row-span-1 col-start-1 row-start-4 row-end-5">2</div>
            <div className="bg-rose-500 row-span-4 col-start-2 row-start-1 row-end-5">3</div>
            <div className="bg-rose-500 row-span-2 col-start-3 row-start-1 row-end-3">4</div>
            <div className="bg-rose-500 row-span-2 col-start-3 row-start-3 row-end-5">5</div>
            <div className="bg-rose-500 row-span-2 col-span-2 col-start-1 col-end-3 row-start-5 row-end-7">6</div>
            <div className="bg-rose-500 row-span-2 col-start-3 col-span-1 row-start-5 row-end-7">7</div>
        </section>
    )
}