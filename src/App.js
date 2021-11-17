import Home from "./Pages/Home/Home";
import './App.scss';
import GlobalContext from "./GlobalContext/GlobalContext";
function App() {
  return (
    <GlobalContext>
      <Home/>
    </GlobalContext>
  );
}

export default App;
