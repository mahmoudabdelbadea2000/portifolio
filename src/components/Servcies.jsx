import { DiResponsive } from "react-icons/di";
import SectionsHeading from "./SectionsHeading";

const Servcies = () => {
  return (
    <section className="py-3 px-3 md:pl-3 md:pr-9">
      <SectionsHeading title="servecies" />
      <div className="grid grid-cols-4 lg:grid-cols-3 justify-between items-center gap-3 mt-5">
        <div className="col-span-4 sm:col-span-2 lg:col-span-1 flex flex-col items-center bg-gray-100 rounded-md p-4 lg: h-72">
          <DiResponsive className="text-8xl" />
          <h5 className="font-bold capitalize text-center mt-2 mb-1">
            responsive design
          </h5>
          <p className="text-center text-gray-400">
            responsive design any width and all screens
          </p>
        </div>
        <div className="col-span-4 sm:col-span-2 lg:col-span-1 flex flex-col items-center bg-gray-100 rounded-md p-4 lg: h-72">
          <img src="/public/teaching.png" className="w-20" alt="ui ux" />
          <h5 className="font-bold capitalize text-center mt-2 mb-1">
            programming websites
          </h5>
          <p className="text-center text-gray-400">
            can i coding any design to convert the images anto the website that
            can people interact with
          </p>
        </div>
        <div className="col-span-4 sm:col-span-2 lg:col-span-1 flex flex-col items-center bg-gray-100 rounded-md p-4 lg: h-72">
          <img src="/public/design.png" className="w-20" alt="ui ux" />
          <h5 className="font-bold text-center mt-2 mb-1">UI / UX</h5>
          <p className="text-center text-gray-400">
            If you have an idea that I can not execute as a design I can design
            for you
          </p>
        </div>
      </div>
    </section>
  );
};

export default Servcies;
