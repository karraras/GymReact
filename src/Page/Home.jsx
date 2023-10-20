import banner from "../assets/images/banner.png";
import { typeEx } from "../context/Content";
import CardEx from "../component/CardEx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import left from "../assets/icons/left-arrow.png";
import right from "../assets/icons/right-arrow.png";
import { useRef, useState, useEffect } from "react";
import ShowResult from "../component/ShowResult";
import { UseGlobalContext } from "../context/Context";
function Home() {
  const { name, getName, hfetchData, ref } = UseGlobalContext();
  const leftClick = useRef(null);
  const rightClick = useRef(null);
  const [search, setSearch] = useState("");

  const [wind, setWind] = useState(window.innerWidth);
  useEffect(() => {
    const newWin = () => {
      return setWind(window.innerWidth);
    };
    window.addEventListener("resize", newWin);
    return () => {
      window.removeEventListener("resize", newWin);
    };
  }, [wind]);

  function searchHandle(e) {
    if (e?.key === "Enter" && search?.length > 0) {
      getName(search);
    }
  }

  useEffect(() => {
    hfetchData(`/exercises/name/${name}?limit=10`);
  }, [name]);

  const handleClick = () => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
      <header className="flex  ">
        <div className="w-1/2">
          <div className="flex gap-12 flex-col items-start  mt-[150px]  pl-[70px]">
            <p className="text-darkOrange font-bold  text-xl">Fitness Club</p>
            <p className="text-black font-bold text-4xl">
              Sweat, Smile <br /> And Repeat
            </p>
            <p className="text-black font-semibold">
              Check out the most effective exercises personalized to you
            </p>
            <button
              onClick={handleClick}
              className="bg-darkOrange text-white rounded  text-lg py-1 px-[8px]"
            >
              Explore Exercises
            </button>
          </div>
          <p className="text-[190px] font-semibold  text-pink lg:block hidden">
            Exercises
          </p>
        </div>
        <img
          src={banner}
          alt="..."
          className="absolute w-[530px] right-8 hidden top-0  lg:block   object-contain "
        />
      </header>
      <div className="flex flex-col gap-12">
        <div className="flex items-center text-center font-bold leading-relaxed justify-center text-4xl">
          <p>
            Awesome Exercises You <br /> Should Know
          </p>
        </div>
        <div className="flex px-[70px] ">
          <input
            type="text"
            value={search}
            onKeyUp={searchHandle}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 outline-none border-solid border-gray border rounded p-5 placeholder:font-bold hover:border-black focus:border-blue focus:border-2 "
            placeholder="Search Exercises"
          />
          <button
            onClick={() => getName(search)}
            className="bg-darkOrange text-white w-[160px] -ml-1 rounded cursor-pointer"
          >
            {" "}
            Search
          </button>
        </div>
        <div className="px-[32px]  py-[100px] relative">
          <Swiper
            slidesPerView={wind <= 640 ? 1 : wind <= 768 ? 2 : 4}
            spaceBetween={3}
            navigation={{
              prevEl: leftClick.current,
              nextEl: rightClick.current,
            }}
            modules={[Navigation]}
          >
            {typeEx?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <CardEx index={index} Data={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            ref={leftClick}
            className="absolute right-[initial] z-30 bottom-[340px] lg:right-[110px]  lg:bottom-[30px]"
          >
            <img
              src={left}
              alt="..."
              className="h-6 w-6  hover:scale-[1.2] duration-300 "
            />
          </button>
          <button
            ref={rightClick}
            className="absolute  right-[initial] bottom-[40px] lg:right-[70px] lg:bottom-[30px]"
          >
            <img
              src={right}
              alt="..."
              className="h-6 w-6  hover:scale-[1.2]  duration-300 "
            />
          </button>{" "}
        </div>
      </div>
      <ShowResult />
    </div>
  );
}

export default Home;
