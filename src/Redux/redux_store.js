import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    DialogsPage: dialogsReducer
});

let store = createStore(reducers);
window.store = store.getState()
export default store;
