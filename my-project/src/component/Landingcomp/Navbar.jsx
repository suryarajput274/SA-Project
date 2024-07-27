import { CiSearch } from "react-icons/ci";
import logoim from "../../assets/landing_photo/svgexport-58 1.png"
import logo from "../../assets/landing_photo/WasteWise.png"

const Navbar = () => {
  return (
    <div className=' flex justify-between p-4 shadow-md '>
        <div className= 'flex gap-2 ' >
          <div>
            <img src={logoim} alt="img" />
          </div>
          <div className=' flex flex-col justify-center items-center  ' >
            <img src={logo} alt="logo" />
          </div>
           
        </div>
        <div className='flex items-center gap-5 text-[18px]' >
            <div>Home</div>
            <div>Our Service</div>
            <div>Blog</div>
            <div>About Us</div>
            <div>Contact Us</div>
            <div className='text-[20px]' ><CiSearch /></div>
        </div>
    </div>
  )
}

export default Navbar
