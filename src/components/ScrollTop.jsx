import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 100;
      if (scrollTop > scrollThreshold) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 bg-black rounded-full text-white w-10 h-10 flex justify-center items-center z-[10000] cursor-pointer ${
        showScrollTop ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      <FaAngleUp />
    </div>
  );
};

export default ScrollTop;
