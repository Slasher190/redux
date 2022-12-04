import {configureStore} from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";

const store = configureStore({
    reducer :{
        custom: customReducer, //can add mannualy
    },
});
export default store;