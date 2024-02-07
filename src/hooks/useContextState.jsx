import { useContext } from "react";
import { StateContext } from "../context/StateProvider";

const useContextState = () => {
  const state = useContext(StateContext);
  return state;
};

export default useContextState;
