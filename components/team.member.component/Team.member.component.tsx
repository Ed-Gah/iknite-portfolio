import { MemberCard } from "..";



export default function TeamMembers(){

    return (
        <div className="mt-10">
            <section className="w-full flex justify-center gap-5 mb-16">
                <div>
                    <input type="radio" name="btn" id="btn_1" className="sr-only peer"/>
                    <label htmlFor="btn_1" className="peer-checked:[&>section]:bg-clip-border peer-checked:[&>section]:bg-gradient-to-r peer-checked:[&>section]:from-[#B16CEA] peer-checked:[&>section]:via-[#FF5E69] peer-checked:[&>section]:to-[#FFA84B]">
                        <section className="border-2 border-transparent cursor-pointer rounded-full overflow-hidden">
                            <div className="bg-[#161513] px-6 py-2 w-full flex items-center justify-center">
                                <h2 className="text-sm text-white">Developer</h2>
                            </div>  
                        </section>
                    </label>
                </div>

                <div>
                    <input type="radio" name="btn" id="btn_2" className="sr-only peer"/>
                    <label htmlFor="btn_2" className="peer-checked:[&>section]:bg-clip-border peer-checked:[&>section]:bg-gradient-to-r peer-checked:[&>section]:from-[#B16CEA] peer-checked:[&>section]:via-[#FF5E69] peer-checked:[&>section]:to-[#FFA84B]">
                        <section className="border-2 border-transparent cursor-pointer rounded-full overflow-hidden">
                            <div className="bg-[#161513] px-6 py-2 w-full flex items-center justify-center">
                                <h2 className="text-sm text-white">Designer</h2>
                            </div>  
                        </section>
                    </label>
                </div>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </section>
        </div>
    )
}