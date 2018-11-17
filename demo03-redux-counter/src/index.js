import { createStore } from "redux";
import counter from "./reducers";

const store = createStore(counter);

store.dispatch({ type: "INCREMENT" });

console.log(store.getState());

store.subscribe(() => {
  document.body.innerText = store.getState();
});

document.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});
