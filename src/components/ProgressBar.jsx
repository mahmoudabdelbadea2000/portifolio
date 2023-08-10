import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollTop, setScrollTop] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };
  return (
    <div className="w-1.5 h-full ml-[-20px] bg-gray-200 rounded-full fixed z-40">
      <span
        style={{ height: `${scrollTop}%` }}
        className="absolute top-0 bg-green-800 rounded-full w-1.5 transition-all ease-out duration-1000"
      ></span>
    </div>
  );
};

export default ProgressBar;
