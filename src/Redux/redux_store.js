import { applyMiddleware, combineReducers, createStore } from "redux";
import  thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import usersReducer from "./users_reducer";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    DialogsPage: dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store
export default store;
