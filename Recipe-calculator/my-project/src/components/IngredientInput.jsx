import { INITIAL_STATE, recipeReducer } from "./recipeReducer";
import { useReducer } from "react";

const IngredientInput = () => {
  const [state, dispatch] = useReducer(recipeReducer, INITIAL_STATE);

  const handleIngredientChange = (index, name, value) => {
    dispatch({
      type: "updateIngredient",
      payload: { index, name, value },
    });
  };

  return (
    <div>
      {state.ingredients.map((ingredient, index) => (

        <div className="flex flex-col mt-5 space-y-1" key={index}>

          <label className="font-semibold capitalize">{`Ingredient ${index + 1}`}</label>

          <div className="flex space-x-2">

            {/* Ingredient Name */}
            <input
              type="text"
              value={ingredient.ingredientName} // to bind the input value to the state
              placeholder="Enter ingredient name"
              className="w-[80%] p-2 border border-gray-200 rounded-lg outline-none"
              onChange={(e) =>
                handleIngredientChange(index, "ingredientName", e.target.value)
              }
            />

            {/* Quantity */}
            <input
              type="text"
              value={ingredient.quantity}
              placeholder="Qt"
              className="w-[10%] p-2 border border-gray-200 rounded-lg outline-none"
              onChange={(e) =>
                handleIngredientChange(index, "quantity", e.target.value)
              }
            />

            {/* Unit */}
            <input
              type="text"
              value={ingredient.unit}
              placeholder="Unit"
              className="w-[10%] p-2 border border-gray-200 rounded-lg outline-none"
              onChange={(e) =>
                handleIngredientChange(index, "unit", e.target.value)
              }
            />

          </div>

        </div>

      ))}

    </div>
  );
};

export default IngredientInput;
