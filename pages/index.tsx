import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2">
        <img
          src="https://picsum.photos/id/1065/536/364"
          alt="Słoneczna uliczka"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ipsum ac nisl hendrerit pretium sit amet non felis. Donec condimentum eget mauris et cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas faucibus tincidunt sem eget pretium. Vivamus in nibh suscipit, volutpat dolor eget, mollis velit. Proin tristique nunc ac nisi gravida, id vestibulum odio dignissim. Mauris id lacus sodales, pretium neque a, dapibus magna. Vestibulum fringilla velit ac elit vehicula euismod.
        </p>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
