import { Fade } from "react-awesome-reveal";
import SectionsHeading from "./SectionsHeading";

const LanguageSkills = () => {
  return (
    <section className="py-3 px-3 md:pl-3 md:pr-9">
      <SectionsHeading title="language skills" />
      <div className="grid grid-cols-2 justify-between items-center gap-5 md:gap-3 mt-5">
        <div className="col-span-2 md:col-span-1 flex flex-col items-center">
          <h5 className="font-bold text-xl text-gray-500 uppercase my-3">
            arabic
          </h5>
          <Fade duration={1000}>
            <div className="relative w-[160px] h-[160px]">
              <div className="w-[160px] h-[160px] rounded-full bg-gray-100 flex justify-center items-center">
                <div className="w-[140px] h-[140px] rounded-full bg-white flex justify-center items-center text-2xl">
                  99%
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
                className="absolute top-0 left-0"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  cx="80"
                  cy="80"
                  r="75"
                  strokeLinecap="round"
                  fill="none"
                  stroke="green"
                  strokeWidth="8px"
                  strokeDasharray={472}
                  strokeDashoffset={50}
                />
              </svg>
            </div>
          </Fade>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col items-center">
          <h5 className="font-bold text-xl text-gray-500 uppercase my-3">
            english
          </h5>
          <Fade duration={1000}>
            <div className="relative w-[160px] h-[160px]">
              <div className="w-[160px] h-[160px] rounded-full bg-gray-100 flex justify-center items-center">
                <div className="w-[140px] h-[140px] rounded-full bg-white flex justify-center items-center text-2xl">
                  70%
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
                className="absolute top-0 left-0"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  cx="80"
                  cy="80"
                  r="75"
                  strokeLinecap="round"
                  fill="none"
                  stroke="green"
                  strokeWidth="8px"
                  strokeDasharray={472}
                  strokeDashoffset={150}
                />
              </svg>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default LanguageSkills;
