import ChallengeLayout from '../../../ChallengeLayout';
import { recipes } from '../data';

type IngredientsProps = {
  ingredients: string[];
  id: string;
  name: string;
};

export default function RecipeList() {
  const challenge = (
    <>
      <ol>
        <li>跟挑戰題 2 資料結構一樣，但請把 list item 抽出建立成 component</li>
      </ol>
    </>
  );
  const ans = (
    <>
      <ol>
        <li>
          跑兩次 map 迴圈
          <code>{`recipes.map((recipe)=> ( `}</code>
          <code>{`<Recipe ingredients={recipe.ingredients} />`}</code>
        </li>
      </ol>
    </>
  );
  return (
    <ChallengeLayout
      chIdx={0}
      secIdx={6}
      challengeIdx={2}
      challengeTxt={challenge}
      answer={ans}
    >
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
    </ChallengeLayout>
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
