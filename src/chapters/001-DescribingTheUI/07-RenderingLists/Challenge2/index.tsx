import ChallengeLayout from '../../../ChallengeLayout';
import { recipes } from '../data';

type IngredientsProps = {
  ingredients: string[];
};

export default function RecipeList() {
  const challenge = (
    <>
      <ol>
        <li>把巢狀資料結構列表顯示於畫面中</li>
      </ol>
    </>
  );
  const ans = (
    <>
      <ol>
        <li>
          跑兩次 map 迴圈
          <code>{`recipes.map((recipe)=> ( `}</code>
          <code>{`{recipe.ingredients.map(ingredient =>`}</code>
        </li>
      </ol>
    </>
  );
  return (
    <ChallengeLayout
      chIdx={0}
      secIdx={6}
      challengeIdx={1}
      challengeTxt={challenge}
      answer={ans}
    >
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.name}</h3>
          <Recipe ingredients={recipe.ingredients} />
        </div>
      ))}
    </ChallengeLayout>
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
