const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPADTE-NEW-POST-TEXT";

export const addPostActionCreator = () => ({ type: ADD_POST });

export const onPostChangeActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

let initialState = {
  posts: [
    { id: 1, message: "HI", likesCount: 11 },
    { id: 2, message: "first Post", likesCount: 12 },
    { id: 3, message: "Second Post", likesCount: 55 },
  ],
  newPostText: "newsocial.com",
}

const profileReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST:
    let newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0,
    };
    state.posts.push(newPost);
    state.newPostText = "";
    return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
      default:
        return state;
  }
};

export default profileReducer;