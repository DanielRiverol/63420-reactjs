import  { useEffect, useState } from "react";
import { useCount } from "./hooks/CustomHook.js";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import UserList from "./components/UserList.jsx";
import withLoading from "./components/HOC/withLoading.jsx";

const ComponenteEnvuelto = withLoading(UserList);

function App() {
  // Parte 4
  const usersData = [
    { id: 1, name: "Kathryn Janeway" },
    { id: 2, name: "Chakotay" },
    { id: 3, name: "Tuvok" },
    { id: 4, name: "B'Elanna Torres" },
    { id: 5, name: "Tom Paris" },
    { id: 6, name: "Harry Kim" },
    { id: 7, name: "The Doctor" },
    { id: 8, name: "Seven of Nine" },
    { id: 9, name: "Neelix" },
    { id: 10, name: "Kes" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    // Simula una llamada a una API
    setTimeout(() => {
      setUsers(users);
      setIsLoading(false);
    }, 2000);
  }, []);

  // const [posts, setPosts] = useState([]);

  // const fetchPosts = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const data = await response.json();
  //     console.log(data.slice(0, 10));

  //     setPosts(data.slice(0, 20));
  //   } catch (error) {
  //     console.log("Hubo error");
  //   }
  // };

  // efecto
  // useEffect(() => {
  //   fetchPosts();
  // }, []);
  // Custom hook
  // const { count, increment, decrement, reset } = useCount(0, 1, 10);

  return (
    <>
      {/* <div style={styles.container}>
        <h1 style={styles.title}>Listado de posts</h1>
        <ul style={styles.list}>
          {posts.map((post) => (
            <li key={post.id} style={styles.item}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div> */}
      {/* Parte 2 */}
      {/* <h1>Producto</h1>
      <ItemListContainer /> */}

      {/* Custom hook */}

      {/* <div className="card">
        <h1>Custom Hook</h1>
        <h2>{count}</h2>
        <div>
          <button onClick={decrement}>Restar</button>
          <button onClick={increment}>Sumar</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div> */}

      <div className='card'>
        <h1>Star-trek</h1>
        <h2>Personajes</h2>
        <ComponenteEnvuelto isLoading={isLoading} users={users} />
      </div>
    </>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    fontSize: "24px",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  loading: {
    fontSize: "18px",
    color: "#888",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    backgroundColor: "#f9f9f9",
    margin: "10px 0",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    firstLetter: "uppercase",
  },
};

export default App;
