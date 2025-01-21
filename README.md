# Recipe Calculator 🧮

The **Recipe Calculator** is an interactive and visually appealing web-based tool designed to help users easily scale their favorite recipes 🥘. Built with modern web technologies, this tool allows you to adjust serving sizes and manage ingredients dynamically. Whether you're cooking for more people or downsizing a recipe, this app ensures precise calculations for your ingredients. The project utilizes **useReducer** to manage the state, which was specifically chosen to improve my understanding of state management in React. By using **useReducer**, the app handles complex state updates more efficiently, offering a more organized approach to managing the dynamic changes in the ingredients and servings.


## Features
- **Recipe Name Input**: Enter the recipe name for organization and reference.
- **Serving Size Scaling**: Adjust recipes by entering the original serving size and the desired scaling factor (e.g., doubling or halving).
- **Dynamic Ingredient Management**:
  - Add ingredients with names, quantities, and measurement units.
  - Automatically scales quantities based on the entered multiplier.
- **Clear Functionality**: Quickly reset all fields to start fresh.
- **Responsive Design**: Optimized for all screen sizes.

## Tech Stack 💻
- **React**
- **Framer Motion**
- **Tailwind CSS**

## How to Use 
1. **Enter Recipe Details**:
   - Input the recipe name in the "Recipe Name" field.
   - Specify the original serving size in the "Original Serving" field.
   - Enter the multiplier (e.g., `2` to double the recipe) in the "Multiply By" field.

2. **Add Ingredients**: 
   - Enter the ingredient name, quantity (Qt), and measurement unit (e.g., cups, grams).
   - Click **"Add Ingredient"** to include it in the recipe.

3. **Resize Recipe**:
   - Click the **"Resize Recipe"** button to calculate the new ingredient quantities based on the scaling factor.

4. **Clear the Form**:
   - Use the **"Clear"** button to reset the form and start a new recipe.

## Installation ⌨️
To run the project locally:
1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd recipe-calculator
`
   ## Future Enhancements 🧠
- Ability to save and retrieve recipes from local storage or a database.
- Fractional quantity support and unit conversions.
- Export functionality to save recipes as PDFs or shareable links.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request to suggest features or improvements.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

