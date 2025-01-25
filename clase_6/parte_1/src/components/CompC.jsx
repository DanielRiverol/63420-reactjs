
import {useTheme} from "../contexts/ThemeContext";
function CompC() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className='card'>
      <h1>CompC</h1>
      {theme}
      <button onClick={() => toggleTheme()}>Cambia theme</button>
    </div>
  );
}

export default CompC;
