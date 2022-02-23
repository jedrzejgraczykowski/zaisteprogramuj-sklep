import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow max-w-2xl mx-auto p-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus velit quis mauris fermentum mollis.
        Donec at justo hendrerit, pretium sapien eget, cursus tortor. Aenean consequat et lacus id tristique.
        Ut nec ex in nulla porttitor facilisis facilisis vestibulum augue. Pellentesque odio augue, tincidunt sit amet libero a, venenatis mollis tortor.
        Aenean ut tellus a nisl ultrices congue vitae id turpis. Nullam fringilla tellus sit amet dictum bibendum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Phasellus blandit eros in ex tristique ullamcorper. Nullam lectus nisl, suscipit consectetur lorem non, tempus auctor lorem.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </main>
      <Footer/>
    </div>
  );
}

export default About;