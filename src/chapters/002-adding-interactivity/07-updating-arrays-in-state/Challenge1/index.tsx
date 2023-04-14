// import "./index.css";

import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId: number) {
    const nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1,
        };
      } else {
        return product;
      }
    });
    setProducts(nextProducts);
  }
  const challenge = (
    <>
      <p>說明待完成，之後補上</p>
    </>
  );
  const ans = <p>說明待完成，之後補上</p>;
  return (
    <>
      <ChallengeLayout
        chIdx={1}
        secIdx={6}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='pensive-bessie-cum0eq'
        solutionIFrameTitle='peaceful-noether-5sp2s8'
      >
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} (<b>{product.count}</b>)
              <button
                onClick={() => {
                  handleIncreaseClick(product.id);
                }}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </ChallengeLayout>
    </>
  );
}
