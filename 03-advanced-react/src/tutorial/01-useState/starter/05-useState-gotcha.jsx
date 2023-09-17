import { useState } from "react";

const UseStateGotcha = () => {
  const [random, setRandom] = useState(0);
  const increaseState = () => {
    setTimeout(() => {
      setRandom((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <>
      <h2>{random}</h2>
      <button className="btn" onClick={increaseState}>
        increase
      </button>
    </>
  );
};

export default UseStateGotcha;
