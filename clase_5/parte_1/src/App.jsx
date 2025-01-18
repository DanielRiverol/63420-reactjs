import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import NotFound from "./components/NotFound";
import Category from "./components/Category";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          {/* ruta con paramtros */}
          <Route path='/categories/:categoryId' element={<Category />} />


          {/* Route para 404 */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        {/* <Home /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
