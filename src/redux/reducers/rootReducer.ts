import { combineReducers } from "redux";
import userReducer from '../reducers/reducer';

const rootReducer = combineReducers({
    users: userReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;