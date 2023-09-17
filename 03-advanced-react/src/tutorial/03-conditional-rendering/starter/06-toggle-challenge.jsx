import { useState } from "react";
const ToggleChallenge = () => {
  const [isReady, setIsReady] = useState(true);
  // const changeStateValue = () => {
  //   if (isReady) {
  //     setIsReady(false);
  //   } else {
  //     setIsReady(true);
  //   }
  // };
  return (
    <div>
      {isReady ? <NewComponent /> : <h3>the state is falsy</h3>}
      <button className="btn" onClick={() => setIsReady(!isReady)}>
        click me
      </button>
    </div>
  );
};

const NewComponent = () => {
  return <h3>Im the new component</h3>;
};

export default ToggleChallenge;
