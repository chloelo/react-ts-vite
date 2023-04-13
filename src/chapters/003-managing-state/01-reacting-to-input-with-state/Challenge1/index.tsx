// import "./index.css";

import { useState } from 'react';

export default function Picture() {
  const [bgActive, setBgActive] = useState(true);
  const clickBgHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setBgActive(true);
  };
  const clickImgHandler = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setBgActive(false);
  };
  return (
    <>
      <div
        className={`background ${bgActive ? "background--active" : ""}`}
        onClick={(e) => clickBgHandler(e)}
      >
        <h1>Challenge 1 of 3: Add and remove a CSS class </h1>
        <img
          className={`picture ${bgActive ? "" : "picture--active"}`}
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
          onClick={(e) => clickImgHandler(e)}
        />
      </div>
    </>
  );
}
