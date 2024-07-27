import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[400px] flex justify-between gap-10 text-white bg-black mt-10 p-[80px]">
      <div className="w-[33%] flex justify-center gap-6 text-[48px]" >
        <FaFacebook />
        <FaInstagramSquare />
        <FaTwitter />
      </div>
      <div className="flex  w-[33%]">
        <div className="text-[24px]" >Services</div>
        <div> </div>
      </div>
      <div className="w-[33%]" >

      </div>
    </div>
  );
};

export default Footer;
