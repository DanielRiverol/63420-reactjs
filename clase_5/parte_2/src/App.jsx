
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemDetail  from "./components/ItemDetail";
function App() {
  // useEffect(() => {
  //   const scroll = () => {
  //     if (window.scrollY > 600) {
  //       alert("Suscribete");
  //       window.removeEventListener("scroll", scroll);
  //     }
  //   };
  //   window.addEventListener("scroll", scroll);
  //   return () => {
  //     window.removeEventListener("scroll", scroll);
  //   };
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ItemDetailContainer />}></Route>
        <Route path='/item/:id' element={<ItemDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
