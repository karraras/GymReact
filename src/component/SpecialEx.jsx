import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import left from "../assets/icons/left-arrow.png";
import right from "../assets/icons/right-arrow.png";
import { useRef, useState, useEffect } from "react";
import Loading from "./Loading";
import { UseGlobalContext } from "../context/Context";
function SpecialEx(prop) {
  const { loading } = UseGlobalContext();

  const { data, name } = prop;
  const leftClick = useRef(null);
  const rightClick = useRef(null);

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

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="px-[32px]  py-[100px] relative">
        <h1 className="text-xl lg:text-3xl py-4 font-bold">
          Similar <span className="text-darkOrange">{name} </span>
          exercise
        </h1>
        <Swiper
          slidesPerView={wind <= 640 ? 1 : wind <= 768 ? 2 : 4}
          spaceBetween={3}
          navigation={{
            prevEl: leftClick.current,
            nextEl: rightClick.current,
          }}
          modules={[Navigation]}
        >
          {data?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="p-5">
                  <div className="hover:scale-105 duration-300     flex-col  cursor-pointer">
                    <div
                      key={item?.id}
                      className="border-t-4   border-t-darkOrange hover:scale-110 duration-300"
                    >
                      {
                        <div className="flex items-center justify-center overflow-hidden ">
                          <img
                            src={item?.gifUrl}
                            alt="..."
                            className="h-[250px]"
                          />
                        </div>
                      }

                      <div className="flex gap-1  my-3 text-white ">
                        {item?.secondaryMuscles.map((items, index) => {
                          return (
                            <p
                              key={index}
                              className="bg-darkOrange px-2 text-[12px] py-1 rounded-full"
                            >
                              {items}
                            </p>
                          );
                        })}
                      </div>
                      <p className="text-lg font-semibold">{item?.name}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          ref={leftClick}
          className="absolute right-[initial] z-30 bottom-[540px] lg:right-[110px]  lg:bottom-[30px]"
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
  );
}

export default SpecialEx;
