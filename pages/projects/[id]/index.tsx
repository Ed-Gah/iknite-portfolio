import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailsType {
  title: string;
  image: string;
}
//TODO: Static variables. to be changed
let imgsrc =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAxQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAYFBwj/xABDEAABAwMCAgYECAwHAAAAAAABAAIDBAUREiExQQYTIlFhgXGRodEHFiMyQpKxwRQVM0NERVJTcnOT4SQ0YoKDovH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHhEBAAMBAAIDAQAAAAAAAAAAAAECERMSUSExQQP/2gAMAwEAAhEDEQA/APRwAjAThoRgLrrjgdKcNUgGyIAJpgA0ogxGE4U0wIaiARBJNU4CdMnUCSwkllA+E6bKWoIHTpgUigSSbKWUUxQYwUaZEMUJRFCUApjgpFCSgY4ykmykqACMKIOS1qCdECqwkRB6CzlPlQtcUQcglBSyo8pZQS5Syow5PqQHlRukwUsoHNygRm8UPX+KhkY7OyAMdlUXopdSm1KpGMBGSUE6Sha480WpAeUsoMpZQOUJTEpiUDEoU5coy5A6SjLt0kAckDiU2opgclEO3KlYULVI0IH1kJw9CUJBUVMHotQ71V3RN1c0FjWlrUXLdOCEEupLUo0tSCTKWw7lGHIXE96qJ8pZVfUQlrKCxlOCoNaIOKCXKWVHlLUgMlCShJTEoHKApEoSgZJMmVEQTgbpw5veETdPeFnQmqUFAC3vCIY70CJSzlLbvSyENMQgdIGEanAZ4ZPFGSM7rxHpR0ikqLtO5000VXFIWta1x0x6XHG/MnJ8ByRqI17a53DLgM96xXSi+VAqpIISY6eE46w9nW7nvkbcl5zXdMLq+p6yOdpaRjTI3J9ecqOtvdVcbYYJJSJRIHNzUanNHMN54PHcngmtRSXerOmV1tr9bZ2Y5Me3iF2aT4QnmWMfhlBKHEAxYcHctgd9+XkvNKOmN0qX4a+R7Rlzi/AaOWVp7L0Yp4p46yoc5rKd7ZCW8i0558eCizEPbWZe0OwRkZweIUFXWU1J+XlAdyaNyfJY2PpPca6V0vXdVAD2GRjGrxcVzJ66SeZ0r3uLnHOSclVjG1n6R0cEbpHDEbeL3vDQFj758K1LT/J2mnZVP5yFxDB71hukVY6ruckczi+KHsxxE9nPMkczlUPwaKZuiZjY3O+Y9nBNNrX7ba2fCzVicC5UEL4SdzCS1zR55BXq1DVxVtJBVQauqmYHs1NLTgjIyDwXy5KwwSvjfuWnByvpPo9d6e9Wmmr6TAjlZ8wfQI2LfIhaiS2fjrklNlDrTax3pjGwLJSJQF470xf4phsCyhLt0Jf4oS8JhsC1JKLWO9JMNhj23eb94pBeZhwesoL5YDxq6of8RUjb50fx/nakemEp1ocrtS29S8dalZe5f21khfOj4/Taj+gfciF76P8AOvqP6J9ynShyu2AvMuM6kwvsmfnBZQXuxfN/GE+P5J9yJl6sAdvcJj6Yj7k6UOV/TUvvE0sb2MILy0gZ78LxOqbmply1gfH2DpG2ocl6VHerBrGLi9u/7p3uWCrIWskrA3fE7yzbi3l7CFm14n6df51tWJ1x5juFFUaQ5mgY71JU41ux3qu87t9KjaWkqX073GM4zxXapr3L1XUF2xPgs675x9KKN2HZzuPDimo2VNfDoMecYGEYuviPWse2Yh+eRClE5TTHQqJ43VssrsYe/JPigfM3T2XZwcjKpSNdp65u7T87wKeD5Q45Dcu7grDFo0Fe8vq5HZ3yPsC9C+Cm8yUtHcKV+TEx7JGZPAkEH7AvOqkh053wvQ+htLb6CzZqrpTQ1NQ7W+MuyWDgAfJItETslq7XIbwdIQR/dC7pDj/1Z50tq5Xql9aj6y1n9c0frW+lXLlb00Q6RZKXxjGSCPas9rtoIxeaP1pi62b5vNH9ZOlTlLQ/GJuf7pj0hb3rNkW7O14o/rpsW4/rij+ur0qcrNEekLc8faks6WUB4Xeix/GknSqc7O98VLQ1u9HEB36VCbL0djdoMED5P2IxrPqC7IttK52ZWvm/nPLx6jsrUcTIxpiY1je5oAC55Dtss7+I6DH+Fsjc8jN2B6tz7FP8XIZItDoKSEcxDCHH6zvcu+OCcDKmQbLOx9ELPAMtoI3O75Muz9yl+K1qc0arfT554atAG8yudc7xR21hdUTNDuTBuT5JkLGy5zuidk+lQQ481lelljtIafxZWxU9Szd1O4uOvx8OXgtJ1t2vjewfxdQn8438s8eHcuM+10lI97IoXAOOHyOOp7vSSpKxv683qrbVNwR1D88op2uI8s5VOSjqA3U+CQAb/NXpTrdFJNqBfjOzQB7lNJZ2vjxLUPDXcQQCFnW/h5dTxagQ8vbjujyrEVITUNaWawTtwBK309rhh06JGOcw8dIGQozbwSAwbagTjgUmTFNlgFbDHjopIxoAAfHOQXenfBVG/dDK2hijqoojHHNsIZXjLHZ4auHr+5eg09xrY6SKOJrBobjbOVzbvV1ldTmnqm6oXccN3SPhn5ecm132gIc+11rRjj1LnNI8uIQTurXMGaV0Z5h0bgR4gFammbUwTMo5ayoZA78lIXOAx3EZViot9RCD1kpeM4y58hBH1lrYVirfbK6rqGspoJXyE9kNZk5XslH0Otc9NFLWW5kVS5gMrGPJDXc8LFUM9VbKgPo5jCM7tiLgD6RnBXqlun6+kieZSXFoJ4KxjNplyW9DLOwbUEDscARj2oHdE7G3eW1sYO/QXfYVo8k/nXeQCcfxE+lXxhnZZxnRPo7MPkqWB4/0n+6il6C2J+QKTT/DI4fetHU0tPUtxNCx573DcefFUDbJIXE0dfUxjkyR3Wt/7b+1PGDZ9s3UfBzbHg9VNUR/7wftC5VZ8GkgOaW5g+EsX3g/cty6S5Qjt09NUY5xksJ8jke1QG8QxuDaylng7y5mR6wp4Qvnb2wB+Dq4j9Kpj5FJekxVlDM3VHPG4ekJJ4Qedh6sc1G6qa04OU7tLRknZc+tuFNAwl5HrVRdNxY3YZKCovVPTwl8rwz0lZKovMs7jHRRkk/SxsipLFPWOEtbI55/Z5BTVyFiov1wukhhtbCxp/On7l0bRYYoHfhFXmoqTuXP3wrtDQspGhsbAF0mcN1SZJzQ2IkDHgsrXSDrnYbzWseeyQsvXxPE7tDTue5E1Sy/GWs88oXvdkCRnnlX2Nk0bt9iZsWPnjf0JkLqmIY3ntMBBVpgLGaWMGAiGlnAKaNw7lPE1W+UDs6U5lkGBoC6bGMI4KKZmDkBTF8nMqqIV0BjkjGOXgqVHI+iIobkNcZPybz9i7olLdtKqV8TKyFzXNGoJMLqM2+mldlrPMFaG0Dq2NZgYCxtvq5aGo6mo3Z9ErXUcutodHwKsfDMw7WrZNqyq7JcjdEHrTKbKAlDqQlwUBlwUTyDx3CZxQlwVFWWgo5Han0zCe/gkp9QToMXWX+WZ2inblVobdU17w+pcSD9FWLXBFt2GrR0zGhow0KNqlvtkUAHZGR4Lqs7PDgmaN1JgYUxEsb/AAUwIwqzFKEQbyMKhKwF2VcPBVZOKogLAoJGK2VE8KioY0UcW/BTBSxgIh2Nw1DKNirA4IHhFUdO+4SEWSp3DdO1CHMuFtE8ZIG4VG3VktDP1NQTpzstM0AjcLg3yNg7QaMjmstNLTTslYC0qVzscFlLJNJpxrOFpIyS0ZK0zKwxycqIcE+SiHcVGXJyoyii1JKNJB//2Q==";

let contributors = [
  { name: "Bermond Yange", role: "UX Designer" },
  { name: "Bermond Yange", role: "UX Designer" },
  { name: "Bermond Yange", role: "UX Designer" },
  { name: "Bermond Yange", role: "UX Designer" },
  { name: "Bermond Yange", role: "UX Designer" },
  { name: "Bermond Yange", role: "UX Designer" },
];

let tools = [
  "Milanote",
  "Google forms",
  "Miro",
  "Adobe XD",
  "Adobe Illustrator",
  "Figma",
];

const ProjectDetails = () => {
  return (
    <div className="flex flex-col bg-[#161513] min-h-screen p-8 md:p-16 text-haiti-50">
      <div className="flex flex-col items-center justify-center">
        <h4 className="flex flex-row items-start justify-start self-start gap-3 font-bold">
          <span className="text-[#FFAEB5]">Projects</span>
          <span className="text-[#FF5E69]">&gt;</span>{" "}
          <span className="text-[#FF5E69]">Cliqkets</span>
        </h4>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FFA84B] bg-clip-text text-transparent py-8">
          Cliqkets
        </h1>
        <Image
          src={imgsrc}
          width={500}
          height={500}
          alt={"Cliqkets"}
          className="w-full max-h-[40vh] object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0 md:space-x-10 py-8 md:py-12 text-haiti-50">
        <div className="flex flex-col space-y-3 md:max-w-[50%]">
          <h3 className="text-2xl font-bold">Overview</h3>
          <p>
            Discover the best events, get unbeatable deals, and enjoy VIP
            treatment at Cliqkets. Browse and book tickets effortlessly for
            concerts, sports, movies, corporate events, workshops, and more.
          </p>
        </div>
        <div className="flex flex-col space-y-3 w-full md:max-w-[50%]">
          <h4 className="text-xl font-bold">Contributors</h4>
          <div className="grid grid-cols-2 gap-5">
            {contributors.map((contributor) => (
              <Contributor
                key={contributors.indexOf(contributor) + contributor.name}
                contributor={{
                  name: contributor.name,
                  role: contributor.role,
                }}
              />
            ))}
          </div>
          <p className="py-5">
            Research, facilitate workshops, prototyping, and visual design.
          </p>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">Tools</h3>
            <p>
              {tools.map((tool) => (
                <>
                  <span key={tools.indexOf(tool) + tool}>{tool}</span>
                  <span> | </span>
                </>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0 md:space-x-10 py-8 md:py-12 text-haiti-50">
        <div className="flex flex-col space-y-4 w-full md:max-w-[50%]">
          <h2 className="font-bold">Problem</h2>
          <p>
            Many pregnant women in Subsaharan Cities do not get adequate
            antenatal care. This leads to a very high rate of infant mortality
            and near-term birth complications. These outcomes, especially with
            first-time pregnancies are avoidable and/or treatable with proper
            antenatal care.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:max-w-[50%]">
          <Image src={imgsrc} width={500} height={500} alt={"alt"} />
        </div>
      </div>
      {/* Process ===== */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FFA84B] bg-clip-text text-transparent py-8">
          Process
        </h1>
        <div className="grid grid-cols-11 gap-8 md:gap-2">
          <ProcessItem />{" "}
          <div className="hidden md:flex col-span-1 pt-14 justify-center">
            {two_way_arrow}
          </div>
          <ProcessItem />{" "}
          <div className="hidden md:flex col-span-1 pt-14 justify-center">
            {two_way_arrow}
          </div>
          <ProcessItem />{" "}
          <div className="hidden md:flex col-span-1 pt-14 justify-center">
            {two_way_arrow}
          </div>
          <ProcessItem />
        </div>
        <div className="py-4 ">{search_icon_arrow_down}</div>
      </div>
      {/* Research and discovery ========= */}
      <div className="flex flex-col">
        
      </div>
    </div>
  );
};

export default ProjectDetails;

const Contributor = ({
  contributor,
}: {
  contributor: { name: string; role: string };
}) => {
  return (
    <Link
      href="#"
      className={`$ col-span-1 flex flex-col items-start justify-start space-y-1`}
    >
      <h3 className="font-bold">{contributor.name}</h3>
      <p>{contributor.role}</p>
    </Link>
  );
};

const ProcessItem = () => {
  return (
    <div className="col-span-11 md:col-span-2 md:space-y-5 flex flex-col items-center justify-start">
      <div className="max-w-[220px] max-h-[220px] min-w-[100px] min-h-[100px] p-4 md:p-10 rounded-full bg-[#302F31] flex items-center justify-center">
        {search_icon}
      </div>
      <div className="flex flex-col items-start justify-start">
        <h4 className="font-bold">Research and Discovery</h4>
        <p>
          Analysis of healthcare data. Interviews with Doctors & Midwives
          Surveys User interviews Competitive Analysis
        </p>
      </div>
    </div>
  );
};

const search_icon = (
  <svg
    width="50"
    height="50"
    viewBox="0 0 82 82"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60.1801 53.009C65.1424 46.2365 67.365 37.8399 66.4032 29.4989C65.4413 21.158 61.366 13.4878 54.9926 8.02287C48.6191 2.55799 40.4175 -0.298557 32.0287 0.024726C23.6398 0.348009 15.6823 3.82728 9.74823 9.76646C3.81413 15.7056 0.341047 23.6667 0.0238126 32.057C-0.293422 40.4473 2.56859 48.648 8.03726 55.0184C13.5059 61.3889 21.178 65.4592 29.5185 66.4152C37.859 67.3712 46.2528 65.1423 53.0207 60.1745H53.0156C53.1693 60.3795 53.3333 60.5743 53.5178 60.7639L73.2483 80.4972C74.2093 81.4589 75.5129 81.9995 76.8723 82C78.2318 82.0005 79.5358 81.4608 80.4974 80.4997C81.459 79.5387 81.9995 78.2349 82 76.8753C82.0005 75.5156 81.4609 74.2114 80.4999 73.2497L60.7694 53.5164C60.5862 53.3309 60.3892 53.1647 60.1801 53.009ZM61.5023 33.3064C61.5023 37.0085 60.7732 40.6742 59.3567 44.0944C57.9402 47.5147 55.864 50.6223 53.2467 53.2401C50.6293 55.8578 47.5221 57.9343 44.1023 59.351C40.6826 60.7677 37.0173 61.4968 33.3158 61.4968C29.6144 61.4968 25.9491 60.7677 22.5294 59.351C19.1096 57.9343 16.0024 55.8578 13.385 53.2401C10.7677 50.6223 8.69147 47.5147 7.27497 44.0944C5.85847 40.6742 5.12941 37.0085 5.12941 33.3064C5.12941 25.8299 8.09904 18.6595 13.385 13.3728C18.671 8.08609 25.8403 5.11603 33.3158 5.11603C40.7914 5.11603 47.9607 8.08609 53.2467 13.3728C58.5327 18.6595 61.5023 25.8299 61.5023 33.3064Z"
      fill="url(#paint0_linear_191_1807)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_191_1807"
        x1="-6.22069"
        y1="40.2546"
        x2="104.903"
        y2="40.2546"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.15625" stop-color="#B16CEA" />
        <stop offset="0.421875" stop-color="#FF5E69" />
        <stop offset="0.692708" stop-color="#FF8A56" />
        <stop offset="1" stop-color="#FFA84B" />
      </linearGradient>
    </defs>
  </svg>
);

const two_way_arrow = (
  <svg
    width="89"
    height="18"
    viewBox="0 0 89 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 9L15 17.6603V0.339746L0 9ZM89 9L74 0.339746V17.6603L89 9ZM13.5 10.5H75.5V7.5H13.5V10.5Z"
      fill="url(#paint0_linear_212_1953)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_212_1953"
        x1="-6.75172"
        y1="9.49091"
        x2="113.859"
        y2="9.49081"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.15625" stop-color="#B16CEA" />
        <stop offset="0.421875" stop-color="#FF5E69" />
        <stop offset="0.692708" stop-color="#FF8A56" />
        <stop offset="1" stop-color="#FFA84B" />
      </linearGradient>
    </defs>
  </svg>
);

const search_icon_arrow_down = (
  <svg
    width="150"
    height="260"
    viewBox="0 0 225 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="112.5"
      cy="112.5"
      r="111"
      stroke="url(#paint0_linear_125_7494)"
      stroke-width="3"
    />
    <path
      d="M112 400L120.66 385H103.34L112 400ZM110.5 224V386.5H113.5V224H110.5Z"
      fill="url(#paint1_linear_125_7494)"
    />
    <circle cx="112.5" cy="112.5" r="105.5" fill="#302F31" />
    <path
      d="M131.18 124.009C136.142 117.237 138.365 108.84 137.403 100.499C136.441 92.158 132.366 84.4878 125.993 79.0229C119.619 73.558 111.418 70.7014 103.029 71.0247C94.6398 71.348 86.6823 74.8273 80.7482 80.7665C74.8141 86.7056 71.341 94.6667 71.0238 103.057C70.7066 111.447 73.5686 119.648 79.0373 126.018C84.5059 132.389 92.178 136.459 100.518 137.415C108.859 138.371 117.253 136.142 124.021 131.174H124.016C124.169 131.379 124.333 131.574 124.518 131.764L144.248 151.497C145.209 152.459 146.513 153 147.872 153C149.232 153 150.536 152.461 151.497 151.5C152.459 150.539 153 149.235 153 147.875C153 146.516 152.461 145.211 151.5 144.25L131.769 124.516C131.586 124.331 131.389 124.165 131.18 124.009ZM132.502 104.306C132.502 108.008 131.773 111.674 130.357 115.094C128.94 118.515 126.864 121.622 124.247 124.24C121.629 126.858 118.522 128.934 115.102 130.351C111.683 131.768 108.017 132.497 104.316 132.497C100.614 132.497 96.9491 131.768 93.5294 130.351C90.1096 128.934 87.0024 126.858 84.385 124.24C81.7677 121.622 79.6915 118.515 78.275 115.094C76.8585 111.674 76.1294 108.008 76.1294 104.306C76.1294 96.8299 79.099 89.6595 84.385 84.3728C89.671 79.0861 96.8403 76.116 104.316 76.116C111.791 76.116 118.961 79.0861 124.247 84.3728C129.533 89.6595 132.502 96.8299 132.502 104.306Z"
      fill="url(#paint2_linear_125_7494)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_125_7494"
        x1="-17.069"
        y1="110.455"
        x2="287.845"
        y2="110.455"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.15625" stop-color="#B16CEA" />
        <stop offset="0.421875" stop-color="#FF5E69" />
        <stop offset="0.692708" stop-color="#FF8A56" />
        <stop offset="1" stop-color="#FFA84B" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_125_7494"
        x1="111.924"
        y1="310.4"
        x2="113.279"
        y2="310.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.15625" stop-color="#B16CEA" />
        <stop offset="0.421875" stop-color="#FF5E69" />
        <stop offset="0.692708" stop-color="#FF8A56" />
        <stop offset="1" stop-color="#FFA84B" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_125_7494"
        x1="64.7793"
        y1="111.255"
        x2="175.903"
        y2="111.255"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.15625" stop-color="#B16CEA" />
        <stop offset="0.421875" stop-color="#FF5E69" />
        <stop offset="0.692708" stop-color="#FF8A56" />
        <stop offset="1" stop-color="#FFA84B" />
      </linearGradient>
    </defs>
  </svg>
);
