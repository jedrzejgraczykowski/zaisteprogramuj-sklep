import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Product } from "../components/Produxt";
import { Main } from "../components/Main";


const DATA = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac ipsum ac nisl hendrerit pretium sit amet non felis. Donec condimentum eget mauris et cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas faucibus tincidunt sem eget pretium. Vivamus in nibh suscipit, volutpat dolor eget, mollis velit.Proin tristique nunc ac nisi gravida, id vestibulum odio dignissim. Mauris id lacus sodales, pretium neque a, dapibus magna. Vestibulum fringilla velit ac elit vehicula euismod.',
  imageUrl: "https://picsum.photos/id/1065/536/364",
  imageAlt: "Słoneczna uliczka",
  rating: 4.5,
};


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Main>
        <Product data={DATA} />
      </Main>
      <Footer/>
    </div>
  );
}

export default Home;
