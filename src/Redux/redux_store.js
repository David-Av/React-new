import { applyMiddleware, combineReducers, compose, createStore } from "redux";
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)
  ));

// let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.___store____ = store
export default store;
