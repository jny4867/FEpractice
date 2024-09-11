import { Provider } from "react-redux";
import store from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
<App />
</Provider>
);
