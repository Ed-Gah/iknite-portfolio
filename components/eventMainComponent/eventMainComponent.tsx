import { Cards, Layout } from "..";
import image from "../../assets/images/card.png";
import { useGetEventsData } from "@/query";

export default function EventMainComponent() {


    const onSuccess = (data: any) => {};

    const onError = (error: any) => {
      console.log("Perform sid effect after error fetching :", error);
    };
    const { isLoading, isError, data, error, isFetching, refetch } =
      useGetEventsData(onSuccess, onError) as any;
    console.log("Datatatatata :", { data });
    if (isLoading) {
      return (
        <Layout>
          <div className="mt-32 text-white">
            <h2>Events loading.....</h2>
          </div>
        </Layout>
      );
    }
  
    if (isError) {
      return (
        <Layout>
          <div className="mt-32 text-white">
            <h2>{error?.message}</h2>
          </div>
        </Layout>
      );
    }

  return (
    <div className="mt-10">
      <section className="w-full flex justify-center gap-5 mb-16">
        <div>
          <input
            type="radio"
            name="btn"
            id="btn_1"
            className="sr-only peer"
            checked
          />
          <label
            htmlFor="btn_1"
            className="peer-checked:[&>section]:bg-clip-border peer-checked:[&>section]:bg-gradient-to-r peer-checked:[&>section]:from-[#B16CEA] peer-checked:[&>section]:via-[#FF5E69] peer-checked:[&>section]:to-[#FFA84B]"
          >
            <section className="border-2 border-transparent cursor-pointer rounded-full overflow-hidden">
              <div className="bg-[#161513] px-6 py-2 w-full flex items-center justify-center">
                <h2 className="text-sm text-white">Previous</h2>
              </div>
            </section>
          </label>
        </div>

        <div>
          <input type="radio" name="btn" id="btn_2" className="sr-only peer" />
          <label
            htmlFor="btn_2"
            className="peer-checked:[&>section]:bg-clip-border peer-checked:[&>section]:bg-gradient-to-r peer-checked:[&>section]:from-[#B16CEA] peer-checked:[&>section]:via-[#FF5E69] peer-checked:[&>section]:to-[#FFA84B]"
          >
            <section className="border-2 border-transparent cursor-pointer rounded-full overflow-hidden">
              <div className="bg-[#161513] px-6 py-2 w-full flex items-center justify-center">
                <h2 className="text-sm text-white">Future</h2>
              </div>
            </section>
          </label>
        </div>
      </section>

        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
            {data?.data?.data.map((event: any, i: number) => {
            return (
                <Cards
                key={i}
                id={event._id}
                image={image}
                title={event.title}
                details={event.description}
                />
            );
            })}
        </section>
    </div>
  );
}
