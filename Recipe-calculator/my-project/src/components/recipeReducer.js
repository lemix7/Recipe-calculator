import { createContext } from "react";

export const INITIAL_STATE = {
  ingredientCount: 1,
  ingredients: ["ingredient 1"],
  recipeName: "",
  originalServing: "",
  multiplyBy: "",
  ingredientsList: [
    {
      ingredientName: "",
      quantity: 0,
      unit: "",
    },
  ],
  showServing: false,
};

export const stateContext = createContext();

export function recipeReducer(state, action) {
  switch (action.type) {
    case "INC_INGREDIENT":
      return {
        ...state,
        ingredientCount: state.ingredientCount + 1,
        ingredients: [
          ...state.ingredients,
          `ingredient ${state.ingredientCount + 1}`,
        ],
        ingredientsList: [
          ...state.ingredientsList,
          { ingredientName: "", quantity: 0, unit: "" },
        ],
      };

    case "SCALE_RECIPE":
      return { ...state, [action.payload.name]: action.payload.value };

    case "CLEAR":
      return { ...INITIAL_STATE, showServing: false };

    case "UPDATE_INGREDIENT":
      return {
        ...state,
        ingredientsList: state.ingredientsList.map((ingredient, index) =>
          index === action.payload.index
            ? {
                ...ingredient,
                [action.payload.name]: action.payload.value,
              }
            : ingredient
        ),
      };

    case "SHOW_SERVING":
      return {
        ...state,
        showServing: true,
      };

    default:
      return state;
  }
}
