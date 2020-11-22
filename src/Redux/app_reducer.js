import { stopSubmit } from "redux-form";
import { authAPI, usersApi } from "../API/api";
import { me } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {

    initialized: false


};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true

            }

        default:
            return state;
    }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => {
    return (dispatch) => {
     let promise =   dispatch(me())
     
     promise.then(()=>{
        dispatch(initializedSuccess())
     })
        
    }
}
export default appReducer;
