import Homepage from "./components/Homepage";
import About from "./components/About";
import Footer from "./components/Footer";
import AdatAmbalan from "./components/AdatAmbalan";
import ProfileandArticles from "./components/ProfileandArticles";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Homepage />
      <About />
      <AdatAmbalan />
      <ProfileandArticles />
      <Contact />
      <Footer />
    </>
  );
}
