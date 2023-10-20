import logo from "../assets/images/Logo.png";
import { UseGlobalContext } from "../context/Context";
function Navbar() {
  const { ref } = UseGlobalContext();

  const handleClick = () => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className=" h-14 pl-[40px]">
      <div className="flex gap-8 sm:gap-[50px]  py-5 md:gap-[100px] cursor-pointer  items-end">
        <img src={logo} alt="..." className="cursor-pointer h-10 w-10" />
        <div className="flex gap-6 font-semibold">
          <button className="border-b-2 border-darkOrange border-solid cursor-pointer">
            Home
          </button>

          <button onClick={handleClick} className="cursor-pointer">
            Exercises
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
