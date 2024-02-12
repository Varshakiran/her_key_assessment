import "./App.css";
import { Provider } from "react-redux";
import ProductContainer from "./components/ProductContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <ProductContainer />
      </div>
    </Provider>
  );
}

export default App;
