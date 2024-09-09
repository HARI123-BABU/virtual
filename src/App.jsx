import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";
import Workflow from "./components/Workflow";
import Price from "./components/Price";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Workflow />
        <Price />
        <Testimonials />

        <Footer />
      </div>
    </>
  );
};

export default App;
