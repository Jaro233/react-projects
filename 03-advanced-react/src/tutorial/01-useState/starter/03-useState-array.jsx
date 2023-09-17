import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    // const newPeople = people.filter((person) => person.id !== id);
    setPeople(people.filter((person) => person.id !== id));
  };

  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map(({ id, name }) => {
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>delete</button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={clearAllItems}
      >
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
