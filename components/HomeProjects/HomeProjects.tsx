import { Cards, MemberCard } from "..";
import image from "../../assets/images/card.png";
import arrow_right from "../../assets/images/arrow_right.svg";

const HomeProjects = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-[80px] gap-5">
      <Cards
        image={image}
        title={"Cliqkets"}
        details={
          "This is just a placeholder for the data that will be fetched from the backend that was built by our able engineers. This code will not make it to production."
        }
      />
      <Cards
        image={image}
        title={"Cliqkets"}
        details={
          "This is just a placeholder for the data that will be fetched from the backend that was built by our able engineers. This code will not make it to production."
        }
      />
      <Cards
        image={image}
        title={"Cliqkets"}
        details={
          "This is just a placeholder for the data that will be fetched from the backend that was built by our able engineers. This code will not make it to production."
        }
      />
      <Cards
        image={image}
        title={"Cliqkets"}
        details={
          "This is just a placeholder for the data that will be fetched from the backend that was built by our able engineers. This code will not make it to production."
        }
      />
      <div className="w-[83px] text-rose-500 text-2xl font-normal">See All</div>
    </section>
  );
};

export default HomeProjects;
