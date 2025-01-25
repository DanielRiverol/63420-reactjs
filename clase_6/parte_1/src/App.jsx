import "./App.css";
import CompA from "./components/CompA";
import { ThemeContext, ThemeProvider ,useTheme} from "./contexts/ThemeContext";

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // function toggleTheme() {
  //   setIsDarkMode((prev) => !prev);
  // }

  // const theme = isDarkMode ? "dark" : "light";
  return (
    <ThemeProvider>
      {/* <div className={`theme-${theme}`}>
        <div className='card'>
          <h1>Clase 6</h1>
          <h2>Context API</h2>
         
          <CompA />
          <button onClick={() => toggleTheme()}>Cambia theme</button> 
        </div>
      </div> */}
      <AppTheme />
    </ThemeProvider>
  );
}

function AppTheme() {
  const { theme,toggleTheme } = useTheme()

  return (
    <div className={`theme-${theme}`}>
      <div className='card'>
        <h1>Clase 6</h1>
        <h2>Context API</h2>
        {/* {theme} */}
        <CompA />
        <button onClick={() => toggleTheme()}>Cambia theme</button>
      </div>
    </div>
  );
}

export default App;
