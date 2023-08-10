import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const About = () => {
  return (
    <section className="flex flex-col items-center text-center py-4 px-4 sm:px-[60px] bg-gray-50">
      <h3 className="font-bold text-slate-900 text-lg sm:text-2xl lg:text-4xl ">
        Hi! my Name is Mahmoud I am Frontend Developer based in Eygpt
      </h3>
      <div className="flex flex-col items-center text-center mt-7">
        <BiSolidQuoteAltLeft className="bg-green-800 text-[44px] p-3 rounded-full text-white" />
        <p className="text-gray-500 leading-[25px] my-4">
          Hello, I am Mahmoud, a dedicated professional from Egypt with a
          background in paramedicine. I graduated from the Health Technical
          Institute in 2020 and have since transitioned into the field of web
          development. With a strong foundation in HTML, CSS, and Bootstrap, I
          can craft visually appealing and responsive websites. I am also
          experienced in utilizing modern frontend frameworks like React.js,
          along with related libraries such as React Bootstrap and Tailwind CSS.
          Additionally, I have proficiency in JavaScript and TypeScript,
          enabling me to create dynamic and interactive web applications. I can
          write clean and maintainable code while adhering to industry best
          practices. I am well-versed in version control using Git and have
          practical experience collaborating on projects using GitHub.
          Throughout my career, I have developed a keen eye for detail and a
          passion for creating user-friendly experiences. I strive to stay
          updated with the latest trends and technologies in the web development
          field, constantly expanding my skill set to deliver high-quality
          solutions. If you are looking for a dedicated web developer who is not
          only skilled but also driven to deliver exceptional results, I am here
          to help. Let is collaborate on your next project and bring your ideas
          to life.
        </p>
        <BiSolidQuoteAltRight className="bg-green-800 text-[44px] p-3 rounded-full text-white" />
      </div>
    </section>
  );
};

export default About;
