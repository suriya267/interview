import { Provider } from "react-redux";
import "./App.css";
import Navigate from "./Navigate";
import ConfigureStore from "./ConfigureStore";

function App() {
  return (
   
      <div className="app-container">
        <Provider store={ConfigureStore} >
        <Navigate />
        </Provider>
      </div>
  );
}

export default App;
