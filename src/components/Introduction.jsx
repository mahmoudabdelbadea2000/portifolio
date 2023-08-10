const Introduction = () => {
  return (
    <section className="flex gap-5 items-center flex-col h-screen text-slate-950">
      <div className="h-[100px] border-r-[1px]" />
      <div className="w-[5px] h-[5px] rounded-full bg-green-800" />
      <p className="uppercase font-extralight">hello! my name is</p>
      <h1 className="uppercase text-4xl font-bold leading-[1.8] text-center ">
        mahmoud <br /> abdel badea
      </h1>
      <p className="uppercase font-extralight">front end developer</p>
      <div className="w-24 h-24 bg-gray-300 rounded-full flex justify-center items-center">
        <img
          className="w-20 h-20 rounded-full"
          src="/public/mahmoud.square.jpg"
          alt="mahmoud abdel badea"
        />
      </div>
    </section>
  );
};

export default Introduction;
