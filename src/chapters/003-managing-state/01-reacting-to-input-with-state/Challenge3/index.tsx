// import "./index.css";

export default function EditProfile() {
  return (
    <>
      <h1>Challenge 3 of 3: Refactor the imperative solution without React </h1>
      <p>如果沒有React的環境，如何呈現一樣的效果</p>
      <a href="https://codesandbox.io/s/sharp-germain-f0f9bl" target="_blank">
        {" "}
        code sandbox 練習的連結
      </a>
      <hr />
      <form>
        <label>
          First name: <b>Jane</b>
          <input />
        </label>
        <label>
          Last name: <b>Jacobs</b>
          <input />
        </label>
        <button type="submit">Edit Profile</button>
        <p>
          <i>Hello, Jane Jacobs!</i>
        </p>
      </form>
    </>
  );
}
