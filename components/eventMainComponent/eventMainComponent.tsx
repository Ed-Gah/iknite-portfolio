import { Cards } from "..";
import image from '../../assets/images/card.png'

export default function EventMainComponent(){

    return (
        <div className="mt-10">
        <section className="w-full flex justify-center gap-5 mb-16">
            <div>
                <input type="radio" name="btn" id="btn_1" className="sr-only peer" checked/>
                <label htmlFor="btn_1" className="peer-checked:[&>section]:bg-clip-border peer-checked:[&>section]:bg-gradient-to-r peer-checked:[&>section]:from-[#B16CEA] peer-checked:[&>section]:via-[#FF5E69] peer-checked:[&>section]:to-[#FFA84B]">
                    <section className="border-2 border-transparent cursor-pointer rounded-full overflow-hidden">
                        <div className="bg-[#161513] px-6 py-2 w-full flex items-center justify-center">
                            <h2 className="text-sm text-white">Previous</h2>
                        </div>  
                    </section>
                </label>
            </div>

            <div>
                <input type="radio" name="btn" id="btn_2" className="sr-only peer"/>
                <label htmlFor="btn_2" className="peer-checked:[&>section]:bg-clip-border peer-checked:[&>section]:bg-gradient-to-r peer-checked:[&>section]:from-[#B16CEA] peer-checked:[&>section]:via-[#FF5E69] peer-checked:[&>section]:to-[#FFA84B]">
                    <section className="border-2 border-transparent cursor-pointer rounded-full overflow-hidden">
                        <div className="bg-[#161513] px-6 py-2 w-full flex items-center justify-center">
                            <h2 className="text-sm text-white">Future</h2>
                        </div>  
                    </section>
                </label>
            </div>
        </section>

        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <Cards image={image} title={'Cliqkets'} details={'This is just a placeholder fir the data that will be fetched from the backend that was built by our able engineers. This code will not make it to production.'} />
        <Cards image={image} title={'Cliqkets'} details={'This is just a placeholder fir the data that will be fetched from the backend that was built by our able engineers. This code will not make it to production.'} />
        <Cards image={image} title={'Cliqkets'} details={'This is just a placeholder fir the data that will be fetched from the backend that was built by our able engineers. This code will not make it to production.'} />
        <Cards image={image} title={'Cliqkets'} details={'This is just a placeholder fir the data that will be fetched from the backend that was built by our able engineers. This code will not make it to production.'} />
        <Cards image={image} title={'Cliqkets'} details={'This is just a placeholder fir the data that will be fetched from the backend that was built by our able engineers. This code will not make it to production.'} />
        <Cards image={image} title={'Cliqkets'} details={'This is just a placeholder fir the data that will be fetched from the backend that was built by our able engineers. This code will not make it to production.'} />
        </section>
    </div>
        )
}