import { useState } from "react";
import { Cards, Layout } from "..";
import image from "../../assets/images/card.png";
import { useGetProjectsData } from "@/query";
import { filteredData } from "@/utils";

export default function ProjectMainComponent() {
  /**
   * Methods
   */
  const [ongoing, setOngoing] = useState<any[]>([]);
  const [featured, setFeatured] = useState<any[]>([]);
  const [sneak, setSneak] = useState<any[]>([]);
  const [type, setType] = useState("featured");
  const onSuccess = (data: any) => {
    setFeatured(
      filteredData(
        filteredData(data.data.data, "production", "type"),
        "featured",
        "status"
      )
    );
    setOngoing(filteredData(
      filteredData(data.data.data, "production", "type"),
      "ongoing",
      "status"
    ));
    setSneak(filteredData(data.data.data, "sneak", "type"));
  };

  const onError = (error: any) => {
    console.log("Perform side effect after error fecthing :", error);
  };
  const { isLoading, isError, data, error, isFetching, refetch } =
    useGetProjectsData(onSuccess, onError) as any;

  if (isLoading) {
    return (
        <div className="mt-32 text-white">
          <h2>Projects loading.....</h2>
        </div>
    );
  }

  if (isError) {
    return (
        <div className="mt-32 text-white">
          <h2>{error?.message}</h2>
        </div>
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
            <section
              className="border-2 border-transparent cursor-pointer rounded-full overflow-hidden"
              onClick={() => setType("featured")}
            >
              <div className="bg-[#161513] px-6 py-2 w-full flex items-center justify-center">
                <h2 className="md:text-2xl text-white">Featured</h2>
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
            <section
              className="border-2 border-transparent cursor-pointer rounded-full overflow-hidden"
              onClick={() => setType("ongoing")}
            >
              <div className="bg-[#161513] px-6 py-2 w-full flex items-center justify-center">
                <h2 className="md:text-2xl text-white">Ongoing</h2>
              </div>
            </section>
          </label>
        </div>

        <div>
          <input type="radio" name="btn" id="btn_3" className="sr-only peer" />
          <label
            htmlFor="btn_3"
            className="peer-checked:[&>section]:bg-clip-border peer-checked:[&>section]:bg-gradient-to-r peer-checked:[&>section]:from-[#B16CEA] peer-checked:[&>section]:via-[#FF5E69] peer-checked:[&>section]:to-[#FFA84B]"
          >
            <section
              className="border-2 border-transparent cursor-pointer rounded-full overflow-hidden"
              onClick={() => setType("sneak")}
            >
              <div className="bg-[#161513] px-6 py-2 w-full flex items-center justify-center">
                <h2 className="md:text-2xl text-white">Sneaks</h2>
              </div>
            </section>
          </label>
        </div>
      </section>

      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
        {type === "ongoing"
          ? ongoing.map((data: any, i: number) => {
              return (
                <Cards
                  key={i}
                  id={data._id}
                  title={data.title}
                  image={data?.coverImage}
                  details={data?.description}
                />
              );
            })
          : type === "featured"
          ? featured.map((data: any, i: number) => {
              return (
                <Cards
                  key={i}
                  id={data._id}
                  title={data.title}
                  image={data?.coverImage}
                  details={data?.description}
                />
              );
            })
          : sneak.map((data: any, i: number) => {
              return (
                <Cards
                  key={i}
                  id={data._id}
                  title={data.title}
                  image={data?.coverImage}
                  details={data?.description}
                />
              );
            })}
      </section>
    </div>
  );
}
