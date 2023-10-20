import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseGlobalContext } from "../context/Context";
import SpecialEx from "../component/SpecialEx";
import Loading from "../component/Loading";
function Exercise() {
  const {
    fetchData,
    data,
    target,
    dataTarget,
    dataEquip,
    equip,
    dataE,
    dataT,
    loading,
  } = UseGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    fetchData(`/exercises/exercise/${id}`);
    dataTarget(`/exercises/target/${target}?limit=10`);
    dataEquip(`/exercises/equipment/${equip}?limit=10`);
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 px-[50px] sm:px-[100px] md:px-[200px] lg:px-[32px] py-[100px] ">
          <img src={data?.gifUrl} alt="..." />
          <div>
            <h1 className="text-2xl lg:text-5xl font-bold my-[40px]">
              {data?.name}
            </h1>
            <p className="my-3  text-base lg:text-lg">{data?.instructions}</p>
            <div>
              {data?.secondaryMuscles?.map((items, index) => {
                return (
                  <p
                    key={index}
                    className="font-semibold text-base lg:text-2xl"
                  >
                    {items}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <SpecialEx name="Target Muscle" data={dataT} />
      <SpecialEx name="Equipment" data={dataE} />
    </div>
  );
}

export default Exercise;
