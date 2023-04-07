import { recipes } from "./data";

type IngredientsProps = {
  ingredients: string[];
  id: string;
  name: string;
};

export default function RecipeList() {
  return (
    <div>
      <h1>Challenge 3 of 4: Extracting a list item component </h1>
      <h2>Recipes</h2>
      {recipes.map(
        (recipe) => (
          <Recipe {...recipe} key={recipe.id} />
        )
        // <div key={recipe.id}>
        //   <h3>{recipe.name}</h3>
        //   <Recipe ingredients={recipe.ingredients} />
        // </div>
      )}
    </div>
  );
}
function Recipe({ name, ingredients }: IngredientsProps) {
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}
