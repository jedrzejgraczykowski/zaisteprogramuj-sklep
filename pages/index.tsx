import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Main from "../app/components/Main";

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
