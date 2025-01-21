
import {  stateContext  } from "./recipeReducer";
import {  useContext } from "react";


const ResizedRecipe = () => {

  const {state} = useContext(stateContext)
  const newServing = state.multiplyBy / state.originalServing;

  return (
    <div className="p-5 border border-gray-300 rounded-md mt-5">
      <h2 className="capitalize font-semibold text-2xl">
        {state.recipeName} new serving
      </h2>

      <div>
        <ul className="list-disc list-inside flex flex-col gap-2 mt-4">
          {state.ingredientsList.map((ingredient , index ) => (
            <li key={index}>
              {ingredient.ingredientName} {ingredient.quantity * newServing } {ingredient.unit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResizedRecipe;
