import { useState } from "react";

const UserFilter = ({ users, render }) => {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }
 
  const filteredUsers = users.filter((user) => {
  return  user.name.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <div>
      <input
        type='text'
        placeholder='Search...'
        value={query}
        onChange={handleChange}
      />
      {render(filteredUsers)}
    </div>
  );
};
export default UserFilter;
