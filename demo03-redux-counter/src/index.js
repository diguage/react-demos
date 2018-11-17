import { createStore } from "redux";
import counter from "./reducers";

const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});
