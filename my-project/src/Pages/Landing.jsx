import Navbar from "../component/Landingcomp/Navbar";
import Hero from "../component/Landingcomp/Hero";
import Services from "../component/Landingcomp/Services";
import Testimonial from "../component/Landingcomp/Testimonial";
import Footer from "../component/Landingcomp/Footer";

const Landing = () => {
  return (
    <div className="">
      <div className="fixed w-full top-0 z-20 bg-white">
        <Navbar />
      </div>
      <div className="pt-16">
        <Hero />
        <Services />
        <Testimonial/>
        <Footer/>
      </div>
    </div>
  );
};

export default Landing;
