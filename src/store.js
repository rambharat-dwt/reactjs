import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./services/reducers/index";

const store = configureStore({ reducer: { rootReducer } });

export default store;
