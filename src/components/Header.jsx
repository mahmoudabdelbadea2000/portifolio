import { MdOutlineMailOutline } from "react-icons/md";

const Header = () => {
  const menu = [
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "SERVESIECS",
    },
    {
      id: 3,
      name: "LANGUAGE",
    },
    {
      id: 4,
      name: "TECHNOLOGIES",
    },
    {
      id: 5,
      name: "PROJECTS",
    },
  ];
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white h-[60px] flex items-center justify-between  border-b-2">
      <div className="w-[60px] h-full bg-slate-950 flex justify-center items-center">
        <a href="/" className="font-extrabold text-5xl text-white capitalize">
          m
        </a>
      </div>
      <ul className="hidden md:flex gap-28 justify-between  ">
        {menu.map((item) => {
          return (
            <li key={item.id}>
              <a
                href="#"
                className="font-medium  transition-all hover:border-b-[2px] hover:border-b-green-700 hover:text-green-950"
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="w-[60px] h-full bg-green-800 flex justify-center items-center">
        <a href="mailto:mahmoudabdelbadea2000@gmail.com">
          <MdOutlineMailOutline className="text-5xl text-white" />
        </a>
      </div>
    </header>
  );
};

export default Header;
