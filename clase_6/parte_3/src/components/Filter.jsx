import { useState,useMemo } from "react";

function Filter() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");
  const items = [
    "Richard",
    "Jerlib",
    "Andres",
    "Florencia",
    "Mariela",
    "Marisol",
  ];

//   const filteredItems = () => {
//     console.log("Filtrando elementos ...");

//     return items.filter((item) =>
//       item.toLowerCase().includes(query.toLowerCase())
//     );
//   };


//useMemo
const filteredItems= useMemo(() => {

    console.log("Filtrando elementos ...");

    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  },[query])
//decimos que solo se ejecute cuando query.value > 3
  return (
    <div>
      <input
        placeholder='Filtrar...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Re-renders ({count})</button>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
