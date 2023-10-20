import logo from "../assets/images/Logo-1.png";
import { AiFillHeart } from "react-icons/ai";
function Footer() {
  return (
    <footer className="w-full py-6 bg-pink">
      <div className="flex gap-6 items-center flex-col container">
        <img src={logo} alt="..." />
        <p className="flex items-center gap-1 text-base sm:text-lg md:text-lxl lg:text-3xl">
          Made with <AiFillHeart color="red" /> by me
        </p>
      </div>
    </footer>
  );
}

export default Footer;
