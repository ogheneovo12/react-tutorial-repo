import "./Header.css";
import { useState } from "react";

function Header({ title, children }) {
  const [colorIndex, setColorIndex] = useState(0);
  const [colors] = useState(["red", "blue", "green"]);

  const changeColor = () => {
    if (colorIndex >= colors?.length - 1) {
      setColorIndex(0);
    } else {
      setColorIndex((prevValue) => prevValue + 1);
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          width: "100%",
          minHeight: 70,
          backgroundColor: colors[colorIndex],
        }}
      >
        <h3 className="title">{title}</h3>
        {children}
      </header>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default Header;
