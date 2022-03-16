import { createStore } from "redux";
import manpowerReducer from "./manpowerReducer";
let peopleStore = createStore(manpowerReducer);
export default peopleStore;
