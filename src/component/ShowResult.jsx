import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UseGlobalContext } from "../context/Context";
import Loading from "./Loading";
function ShowResult() {
  const { ref, getTarget, getEquip, hfetchData, type, hData, loading } =
    UseGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    hfetchData(`/exercises/bodyPart/${type}?limit=10&offset=10`);
  }, [type]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div ref={ref}>
      <div className="px-8">
        <p className="text-4xl font-bold ">Show Results</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-[50px] sm:px-[150px] gap-[50px] py-10">
        {hData?.map((item) => {
          return (
            <div
              onClick={() => {
                navigate(`/exercise/${item?.id}`);
                getTarget(item?.target);
                getEquip(item?.equipment);
              }}
              key={item?.id}
              className="border-t-4  border-t-darkOrange hover:scale-110 duration-300"
            >
              {
                <div className="flex items-center justify-center overflow-hidden ">
                  <img src={item?.gifUrl} alt="..." className="h-[250px]" />
                </div>
              }

              <div className="flex gap-1  my-3 text-white ">
                {item?.secondaryMuscles.slice(0, 2).map((items, index) => {
                  return (
                    <p
                      key={index}
                      className="bg-darkOrange px-2 text-sm py-1 rounded-full"
                    >
                      {items}
                    </p>
                  );
                })}
              </div>
              <p className="text-lg font-semibold">{item?.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowResult;
