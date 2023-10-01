import {configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger"
import userReducer  from "./features/users/slice";

const store = configureStore({
    reducer: {
        Users: userReducer
    },
    middleware: [logger]
});

export type Rootstate = ReturnType<typeof store.getState>;

export default store;