import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Main } from "../components/Main";

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
