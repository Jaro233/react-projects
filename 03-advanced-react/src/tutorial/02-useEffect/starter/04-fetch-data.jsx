import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <h3>Github users</h3>
      <ul className="users">
        {users.map((user) => {
          return (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <div>
                <h5>{user.login}</h5>
                <a target="_blank" href={user.html_url}>
                  profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
