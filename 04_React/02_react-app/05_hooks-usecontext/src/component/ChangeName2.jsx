import React, { useContext } from "react";
import { NameContext } from "./NameShareApp2";

function ChangeName2() {
  const { names, setCurrentName } = useContext(NameContext);
  return (
    <>
      {names.map((name, index) => (
        <button key={index} onClick={() => setCurrentName(name)}>
          {name}
        </button>
      ))}
    </>
  );
}

export default ChangeName2;
