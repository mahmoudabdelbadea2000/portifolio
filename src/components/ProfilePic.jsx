import ProgressBar from "./ProgressBar";

const ProfilePic = () => {
  return (
    <div className="col-span-1 hidden md:flex">
      <ProgressBar />
      <img
        className="w-2/6 h-screen object-cover fixed right-0"
        src="/mahmoud.jpg"
        alt="mahmoud abdelbadea"
      />
    </div>
  );
};

export default ProfilePic;
