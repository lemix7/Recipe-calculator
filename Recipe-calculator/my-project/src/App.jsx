import Calculator from "./components/Calculator";
import GenerateBtn from "./components/GenerateBtn";
import ResizedRecipe from "./components/ResizedRecipe";
import { useContext } from "react";
import { stateContext } from "./components/recipeReducer";
import { motion } from "framer-motion";

const App = () => {
  const { state, dispatch } = useContext(stateContext);

  return (
    <div className=" p-2 md:p-4">
      <Calculator />

      <GenerateBtn
        onclick={() => {
          dispatch({ type: "SHOW_SERVING" });
        }}
      />

      {state.showServing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ResizedRecipe />
        </motion.div>
      )}
    </div>
  );
};
export default App;
