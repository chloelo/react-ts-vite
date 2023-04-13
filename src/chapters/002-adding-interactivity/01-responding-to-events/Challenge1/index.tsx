// import "./index.css";

export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  }

  return (
    <>
      {/* <button onClick={handleClick()}></button> */}
      <h1>Challenge 1 of 2: Fix an event handler</h1>
      <button onClick={handleClick}>Toggle the lights</button>
    </>
  );
}
