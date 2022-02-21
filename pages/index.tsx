import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-2">
        Właściwa Zawartość
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
