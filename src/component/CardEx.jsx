import icon from "../assets/icons/gym.png";
import { UseGlobalContext } from "../context/Context";
import { useState } from "react";
function CardEx(prop) {
  const [act, setAct] = useState(0);
  const { getType } = UseGlobalContext();
  const { Data, index } = prop;
  return (
    <div
      className="overflow-hidden"
      onClick={() => {
        getType(Data.name);
        setAct(index);
      }}
    >
      <div
        className={` ${
          act === index && "border-t-darkOrange border-t-2 "
        } flex  hover:scale-[1.1] duration-300  h-[200px] items-center justify-center gap-4 p-5 flex-col  cursor-pointer`}
      >
        <img src={icon} alt="..." className="h-[25px] w-[25px]" />
        <p className="font-semibold">{Data.name}</p>
      </div>
    </div>
  );
}

export default CardEx;
