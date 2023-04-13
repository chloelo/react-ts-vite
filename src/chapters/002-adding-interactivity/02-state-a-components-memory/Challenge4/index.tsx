export default function FeedbackForm() {
  // const [name, setName] = useState('');

  function handleClick() {
    const name = prompt("What is your name?");
    // setName(ans);
    alert(`Hello, ${name}!`);
  }

  return (
    <>
      <h1>Challenge 4 of 4: Remove unnecessary state </h1>
      <p>
        此範例中，彈跳視窗輸入的值，不需要讓畫面重新渲染，所以不要定義成state，用常規變數即可
      </p>
      <button onClick={handleClick}>Greet</button>
    </>
  );
}
