import { useEffect, useState } from "react";

import "./App.css";
function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data.slice(0, 10));

      setPosts(data.slice(0, 20));
    } catch (error) {
      console.log("Hubo error");
    }
  };

  // efecto
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>Listado de posts</h1>
        <ul style={styles.list}>
          {posts.map((post) => (
            <li key={post.id} style={styles.item}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
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
