import { profileApi, usersApi } from "../API/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPADTE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";


let initialState = {
  posts: [
    { id: 1, message: "HI", likesCount: 11 },
    { id: 2, message: "first Post", likesCount: 12 },
    { id: 3, message: "Second Post", likesCount: 55 },
  ],
  newPostText: "newsocial.com",
  profile:null,
  status:""
}

const profileReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST:{
    let newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0,
    };
    return {...state,
    posts:[...state.posts,newPost],
    newPostText:""
    }

  }
    case UPDATE_NEW_POST_TEXT:{
      return {...state,
      newPostText:action.newText}
    }
    case SET_USER_PROFILE:{
      return {...state,
      profile:action.profile}
      
    }
    case SET_STATUS:{
      return {...state,
      status:action.status}
      
    }
      default:
        return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setStatus = (status) => ({ type: SET_STATUS,status });

export const onPostChangeActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE,profile });

export const getProfile = (profile)=>{
  
  return (dispatch)=>{
    
    usersApi.getProfile(profile)
    .then((response) => {
      
     dispatch(setUserProfile(response.data))
    
    });
    
  }
}
export const getStatus = (userId)=>{
  
  return (dispatch)=>{
    
    profileApi.getStatus(userId)
    .then((response) => {
      
     dispatch(setStatus(response.data))
    
    });
    
  }
}
export const updateStatus = (status)=>{
  
  return (dispatch)=>{
    
    profileApi.updateStatus(status)
    .then((response) => {
      if(response.data.resultCode===0){
     dispatch(setStatus(status))
    
      }
    });
    
  }
}

export default profileReducer;

