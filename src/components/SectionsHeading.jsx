import PropTypes from "prop-types";

const SectionsHeading = ({ title }) => {
  return (
    <div className="relative py-3">
      <div className=" relative w-full h-2 rounded-full border-[1px]">
        <div className="w-3 h-2 bg-green-800 rounded-full absolute left-0" />
        <div className="w-3 h-2 bg-green-800 rounded-full absolute right-0" />
      </div>
      <h3 className="capitalize font-medium text-3xl text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white px-3">
        {title}
      </h3>
    </div>
  );
};

SectionsHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionsHeading;
