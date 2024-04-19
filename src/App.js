import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
function App() {
  //hence forth everything will be done in body.js and not in app.js
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
