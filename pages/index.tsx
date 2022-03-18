import Header from "../app/components/layout/Header";
import Footer from "../app/components/layout/Footer";
import Main from "../app/components/layout/Main";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Main>
      </Main>
      <Footer/>
    </div>
  );
}

export default Home;
