import { Fade } from "react-awesome-reveal";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io";
import { SiAdobexd, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { SectionsHeading } from "./";

const Technology = () => {
  return (
    <section className="py-3 px-3 md:pl-3 md:pr-9">
      <SectionsHeading title="Technologies" />
      <Fade duration={1000}>
        <div className="flex gap-4 justify-center items-center mt-4 flex-wrap">
          <AiFillHtml5 className="text-6xl rounded-full text-[#dd4d28]" />
          <BiLogoCss3 className="text-6xl rounded-full text-[#254bdd]" />
          <IoLogoSass className="text-6xl rounded-full text-[#cf6c9c]" />
          <FaBootstrap className="text-6xl rounded-full text-[#8b18fd]" />
          <BiLogoTailwindCss className="text-6xl rounded-full text-[#3ebff8]" />
          <DiJavascript className="text-6xl rounded-full text-[#efd81d]" />
          <SiTypescript className="text-6xl rounded-full text-[#2f74c0]" />
          <BsGit className="text-6xl rounded-full text-[#f05639]" />
          <AiFillGithub className="text-6xl rounded-full text-[#3b0764]" />
          <BiLogoReact className="text-6xl rounded-full text-[#67dbfc]" />
          <TbBrandRedux className="text-6xl rounded-full text-[#7a50be]" />
          <TbBrandNextjs className="text-6xl rounded-full text-black" />
          <SiAdobexd className="text-6xl rounded-full text-[#350826]" />
        </div>
      </Fade>
    </section>
  );
};

export default Technology;
