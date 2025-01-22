
import {  stateContext  } from "./recipeReducer";
import {  useContext } from "react";


const ResizedRecipe = () => { 

  const {state} = useContext(stateContext)


  return (
    <div className="p-5 border border-gray-300 rounded-md mt-5">
      <h2 className="capitalize font-semibold text-2xl">
        {state.recipeName} new serving
      </h2>

      <div>
        <ul className="list-disc list-inside flex flex-col gap-2 mt-4">
          {state.scaledServing.map((ingredient , index ) => (
            <li key={index}>
              {ingredient.IngN} {ingredient.amount} {ingredient.unit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResizedRecipe;
