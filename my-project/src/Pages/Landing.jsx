import Navbar from "../component/Landingcomp/Navbar";
import Hero from "../component/Landingcomp/Hero";
import Services from "../component/Landingcomp/Services";

const Landing = () => {
  return (
    <div className="">
      <div className="fixed w-full top-0 z-10 bg-white">
        <Navbar />
      </div>
      <div className="pt-16">
        <Hero />
        <Services />
      </div>
    </div>
  );
};

export default Landing;
