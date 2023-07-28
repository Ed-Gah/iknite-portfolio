


export default function TeamMembers(){

    return (
        <div className="mt-10 ">
            <section className="flex gap-5">
                <div>
                    <input type="radio" name="btn" id="btn_1" className="sr-only peer"/>
                    <label htmlFor="btn_1" className="peer-checked:[&>section]:bg-clip-border peer-checked:[&>section]:bg-gradient-to-r peer-checked:[&>section]:from-[#B16CEA] peer-checked:[&>section]:via-[#FF5E69] peer-checked:[&>section]:to-[#FFA84B]">
                        <section className="border-2 border-transparent cursor-pointer rounded-full overflow-hidden">
                            <div className="bg-black px-6 py-2 w-full flex items-center justify-center">
                                <h2 className="text-sm">Developer</h2>
                            </div>  
                        </section>
                    </label>
                </div>

                <div>
                    <input type="radio" name="btn" id="btn_2" className="sr-only peer"/>
                    <label htmlFor="btn_2" className="peer-checked:[&>section]:bg-clip-border peer-checked:[&>section]:bg-gradient-to-r peer-checked:[&>section]:from-[#B16CEA] peer-checked:[&>section]:via-[#FF5E69] peer-checked:[&>section]:to-[#FFA84B]">
                        <section className="border-2 border-transparent cursor-pointer rounded-full overflow-hidden">
                            <div className="bg-black px-6 py-2 w-full flex items-center justify-center">
                                <h2 className="text-sm">Designer</h2>
                            </div>  
                        </section>
                    </label>
                </div>
            </section>
        </div>
    )
}