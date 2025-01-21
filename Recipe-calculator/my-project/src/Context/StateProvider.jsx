import {
  INITIAL_STATE,
  recipeReducer,
  stateContext,
} from "../components/recipeReducer";
import { useReducer } from "react";

// eslint-disable-next-line react/prop-types
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, INITIAL_STATE);

  return (
    <stateContext.Provider value={{ state, dispatch }}>
      {children}
    </stateContext.Provider>
  );
};

export default StateProvider;
