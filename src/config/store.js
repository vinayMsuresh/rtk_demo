import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import userReducer from "../feature/user/userSlice";
import postReducer from "../feature/saga_example/postSlice";
import createSagaMiddleware from "redux-saga"; 
import postSaga from '../feature/saga_example/sagas';

const saga = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        posts: postReducer
    },
    middleware:[saga]
})

saga.run(postSaga);