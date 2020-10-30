const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_DIALOG_TEXT = "UPDATE-DIALOG-TEXT";
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const dialogMessageTextActionCreator = (message) => ({
  type: UPDATE_DIALOG_TEXT,
  message: message,
});
let initialState = {
  messagesData: [
    { id: 1, message: "sdsdsdsd" },
    { id: 2, message: "sdsdsdsd" },
    { id: 3, message: "sdsdsdsd" },
    { id: 4, message: "sdsdsdsd" },
    { id: 5, message: "sdsdsdsd" },
  ],
  dialogsData: [
    { id: 1, name: "David" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Valera" },
  ],
  dialogMessage: "gri",
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 6,
        message: state.dialogMessage,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        dialogMessage: "",
      };
    }
    case UPDATE_DIALOG_TEXT: {
      return { ...state, dialogMessage: action.message };
    }
    default:
      return state;
  }
};

export default dialogsReducer;
