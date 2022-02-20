import { Provider } from "react-redux";
import { store } from "../state";
import VideosDisplay from "./VideosDisplay";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>aparat interview</h1>
        <VideosDisplay />
      </div>
    </Provider>
  );
};

export default App;
