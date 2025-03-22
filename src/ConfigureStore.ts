import { legacy_createStore as createStore } from "redux";
import Reducer from "./Store/Reducer";

  const store:any = createStore(Reducer);


export default store;
