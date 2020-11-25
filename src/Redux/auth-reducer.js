import {
  stopSubmit
} from "redux-form";
import {
  authAPI,
  usersApi
} from "../API/api";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';

let initialState = {

  id: null,
  email: null,
  login: null,
  isAuth: false

  //  isFetching:false

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,

      }

      default:
        return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    id,
    email,
    login,
    isAuth
  }
})

export const me = () => async (dispatch) => {
  let response = await authAPI.me()
  if (response.data.resultCode === 0) {
    let {
      id,
      email,
      login
    } = response.data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    dispatch(me())
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
    dispatch(stopSubmit("Login", {
      _error: message
    }))
  }
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}


export default authReducer;
