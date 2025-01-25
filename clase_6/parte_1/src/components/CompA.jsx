import {useContext} from "react";
import CompB from "./CompB";
import { ThemeContext } from "../contexts/ThemeContext";
function CompA() {
    const {theme} =useContext(ThemeContext)
  return (
    <div className='card'>
      <h1>CompA</h1>
      {theme}
      {/* {useContext(ThemeContext).theme} */}
      <CompB  />
    </div>
  );
}

export default CompA;
