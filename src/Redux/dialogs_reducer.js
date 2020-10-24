const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_DIALOG_TEXT = "UPDATE-DIALOG-TEXT";
export const addMessageActionCreator = ()=>({type:ADD_MESSAGE})
export const dialogMessageTextActionCreator = (message)=>({
  type:UPDATE_DIALOG_TEXT, message:message
})
const dialogsReducer = (state, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.dialogMessage,
              };
              state.messagesData.push(newMessage);
              state.dialogMessage = "";
              return state
              case UPDATE_DIALOG_TEXT:
                state.dialogMessage = action.message;
                return state;
                default:
                    return state
    }
};

export default dialogsReducer;
