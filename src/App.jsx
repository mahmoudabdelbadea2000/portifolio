import {
  About,
  Header,
  Introduction,
  ProfilePic,
  Servcies,
  SideBar,
} from "./components";

function App() {
  return (
    <section>
      <Header />
      <SideBar />
      <section className="grid grid-cols-3 md:grid-cols-3 ml-[60px] mt-[60px]">
        <div className="col-span-2 flex flex-col w-[calc(100vw-69px)] md:w-full">
          <Introduction />
          <About />
          <Servcies />
        </div>
        <ProfilePic />
      </section>
    </section>
  );
}

export default App;
