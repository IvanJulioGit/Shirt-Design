import Home from "./Pages/Home/Home";
import './App.css';
import GlobalContext from "./GlobalContext/GlobalContext";
function App() {
  return (
    <GlobalContext>
      <Home/>
    </GlobalContext>
  );
}

export default App;
