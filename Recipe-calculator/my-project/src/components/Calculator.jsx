import InputField from "./InputField";
import ClearBtn from "./ClearBtn";
import AddIngrBtn from "./AddIngrBtn";
import { useContext } from "react";
import { stateContext } from "./recipeReducer";

const Calculator = () => {
  const { state, dispatch } = useContext(stateContext);

  const handleChange = (e) => {
    dispatch({
      type: "SCALE_RECIPE",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleClear = () => [dispatch({ type: "CLEAR" })];

  const handleIngredientChange = (index, name, value) => {
    dispatch({
      type: "UPDATE_INGREDIENT",
      payload: { index, name, value },
    });
  };

  return (
    <div className="w-full max-w-[1000px] flex flex-col p-5 ">
      <h1 className="font-sans capitalize text-2xl font-bold mb-5">
        recipe calculator
      </h1>

      <InputField
        title={"Recipe Name"}
        name={"recipeName"}
        onchange={handleChange}
        value={state.recipeName}
        placeholder={"Enter recipe name"}
      />

      <div className="flex flex-col mt-5 md:flex-row md:gap-x-5  ">
        <InputField
          title={"Original serving"}
          name={"originalServing"}
          onchange={handleChange}
          value={state.originalServing}
          placeholder={"e.g. 4"}
        />
        <InputField
          title={"Multiply by"}
          name={"multiplyBy"}
          onchange={handleChange}
          value={state.multiplyBy}
          placeholder={"e.g. 2"}
        />
      </div>

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
                className="w-[60%] md:w-[80%] p-2 border border-gray-200 rounded-lg outline-none"
                onChange={(e) =>
                  handleIngredientChange(
                    index,
                    "ingredientName",
                    e.target.value
                  )
                }
              />

              {/* Quantity */}
              <input
                type="text"
                value={ingredient.quantity}
                placeholder="Qt"
                className="w-[20%] md:w-[10%] p-2 border border-gray-200 rounded-lg outline-none"
                onChange={(e) =>
                  handleIngredientChange(index, "quantity", e.target.value)
                }
              />

              {/* Unit */}
              <input
                type="text"
                value={ingredient.unit}
                placeholder="Unit"
                className=" w-[20%] md:w-[10%] p-2 border border-gray-200 rounded-lg outline-none"
                onChange={(e) =>
                  handleIngredientChange(index, "unit", e.target.value)
                }
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-2 mt-5">
        <AddIngrBtn onclick={() => dispatch({ type: "INC_INGREDIENT" })} />
        <ClearBtn onclick={handleClear} />
      </div>
    </div>
  );
};

export default Calculator;
