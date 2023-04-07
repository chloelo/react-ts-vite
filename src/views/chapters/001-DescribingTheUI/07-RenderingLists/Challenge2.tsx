import { recipes } from "./data";

type IngredientsProps = {
  ingredients: string[];
};

export default function RecipeList() {
  return (
    <div>
      <h1>Challenge 2 of 4: Nested lists in one component </h1>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.name}</h3>
          <Recipe ingredients={recipe.ingredients} />
        </div>
      ))}
    </div>
  );
}
function Recipe({ ingredients }: IngredientsProps) {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
  );
}
