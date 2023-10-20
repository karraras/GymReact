import { createContext, useContext, useReducer } from "react";
import Reduce from "./Reduce";
const AppContext = createContext();
import { useRef } from "react";

function AppProvider(prop) {
  const { children } = prop;

  const ref = useRef(null);

  const initalValue = {
    data: [],
    hData: [],
    loading: false,
    target: "",
    dataT: [],
    dataE: [],
    equip: "",
    type: "back",
    name: "back",
  };

  const [state, dispatch] = useReducer(Reduce, initalValue);
  const url = "https://exercisedb.p.rapidapi.com";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "79007f333amshf752f73202f0f8ap165c6ejsn4cf4650caba5",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  const fetchData = async (id) => {
    dispatch({ type: "Loading" });
    const response = await fetch(`${url}${id}`, options);
    const result = await response.json();
    dispatch({ type: "DisPlayData", payload: result });
  };

  const hfetchData = async (id) => {
    dispatch({ type: "Loading" });
    const response = await fetch(`${url}${id}`, options);
    const result = await response.json();
    dispatch({ type: "hDisPlayData", payload: result });
  };

  const dataTarget = async (id) => {
    dispatch({ type: "Loading" });
    const response = await fetch(`${url}${id}`, options);
    const result = await response.json();
    dispatch({ type: "DataTarget", payload: result });
  };

  const dataEquip = async (id) => {
    dispatch({ type: "Loading" });
    const response = await fetch(`${url}${id}`, options);
    const result = await response.json();
    dispatch({ type: "DataEquip", payload: result });
  };

  function getTarget(id) {
    dispatch({ type: "getTarget", payload: id });
  }
  function getEquip(id) {
    dispatch({ type: "getEquip", payload: id });
  }
  function getType(id) {
    dispatch({ type: "getType", payload: id });
  }
  function getName(id) {
    dispatch({ type: "getName", payload: id });
  }

  const values = {
    ...state,
    ref,
    getType,
    getName,
    fetchData,
    hfetchData,
    getTarget,
    dataTarget,
    dataEquip,
    getEquip,
  };
  console.log(state);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export const UseGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
