import {
  About,
  Footer,
  Header,
  Introduction,
  LanguageSkills,
  Portifolio,
  ProfilePic,
  ScrollTop,
  Servcies,
  SideBar,
  Technology,
} from "./components";

function App() {
  return (
    <>
      <section>
        <Header />
        <SideBar />
        <section className="grid grid-cols-3 md:grid-cols-3 ml-[60px] mt-[60px]">
          <div className="col-span-2 flex flex-col w-[calc(100vw-69px)] md:w-full">
            <Introduction />
            <About />
            <Servcies />
            <LanguageSkills />
            <Technology />
            <Portifolio />
            <Footer />
          </div>
          <ProfilePic />
        </section>
      </section>
      <ScrollTop />
    </>
  );
}

export default App;
