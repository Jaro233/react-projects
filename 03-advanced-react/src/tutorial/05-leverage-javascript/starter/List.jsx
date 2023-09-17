import { Person } from "./Person";
import { people } from "../../../data";
const List = () => {
  return (
    <div>
      <ul>
        {people.map((person) => {
          const { name, nickName, images, id } = person;
          return <Person key={id} {...person} />;
        })}
      </ul>
    </div>
  );
};
export default List;
