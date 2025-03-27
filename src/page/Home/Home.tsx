import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Services from "../../components/Services";
import Works from "../../components/Works"
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
const Home: React.FC = () => {
  return (
    <main>
        <Header />
        <Hero/>
        <About/>
        <Services/>
        <Works/>
        <Contact/>
        <Footer/>
    </main>
  );
};

export default Home