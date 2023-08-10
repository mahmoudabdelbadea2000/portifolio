import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

const SideBar = () => {
  return (
    <aside className="text-slate-900 fixed left-0 border w-[60px] h-screen flex flex-col justify-center gap-[120px] items-center">
      <h3 className=" text-xl font-extrabold -rotate-90 uppercase tracking-widest">
        homepage
      </h3>
      <div className="flex flex-col gap-3">
        <a
          href="https://www.facebook.com/mahmoudabdelbadea2000"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook className="text-2xl transition-all ease-in-out hover:scale-125 hover:text-blue-800" />
        </a>
        <a
          href="https://www.linkedin.com/in/mahmoud-abdel-badea-1026611ba/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="text-2xl rounded-full transition-all ease-in-out hover:scale-125 hover:text-slate-900" />
        </a>
        <a
          href="https://twitter.com/mahmodkamal100"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle className="text-2xl transition-all ease-in-out hover:scale-125 hover:text-blue-600" />
        </a>
        <a
          href="https://github.com/mahmoudabdelbadea2000"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="text-2xl transition-all ease-in-out hover:scale-125 hover:text-purple-950" />
        </a>
        <a href="https://wa.me/+2001019154123" target="_blank" rel="noreferrer">
          <RiWhatsappFill className="text-2xl transition-all ease-in-out hover:scale-125 hover:text-green-900" />
        </a>
      </div>
    </aside>
  );
};

export default SideBar;
