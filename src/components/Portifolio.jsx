import { Fade } from "react-awesome-reveal";
import { SectionsHeading } from "./";

const Portifolio = () => {
  return (
    <section className="py-3 px-3 md:pl-3 md:pr-9">
      <SectionsHeading title="portifolio" />
      <Fade duration={2000}>
        <div className="grid grid-cols-6 gap-3 mt-7">
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 overflow-hidden rounded-md">
            <a
              href="https://kasper-template-html-css.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/kasper.png"
                alt="proj__one"
                className="rounded-md transition-transform duration-150 hover:scale-125"
              />
            </a>
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 overflow-hidden rounded-md">
            <a
              href="https://vanilla-js-portifolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/js-template.png"
                alt="proj__two"
                className="rounded-md transition-transform duration-150 hover:scale-125"
              />
            </a>
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 overflow-hidden rounded-md">
            <a
              href="https://revir-moving.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/revier-moon.png"
                alt="proj__three"
                className="rounded-md transition-transform duration-150 hover:scale-125"
              />
            </a>
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 overflow-hidden rounded-md">
            <a
              href="https://ui-react-ecommerce-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/ui-react-e-commerce.png"
                alt="proj__four"
                className="rounded-md transition-transform duration-150 hover:scale-125"
              />
            </a>
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 overflow-hidden rounded-md">
            <a
              href="https://e-commerce-reactjs-real-api.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/react-ecommerce-app-with-real-api.png"
                alt="proj__five"
                className="rounded-md transition-transform duration-150 hover:scale-125"
              />
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Portifolio;
