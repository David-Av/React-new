import { connect } from "react-redux";
import {
  addMessageActionCreator,
  dialogMessageTextActionCreator,
} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  console.log(state);
  return {
    state: state.DialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateDialogText: (text) => {
      dispatch(dialogMessageTextActionCreator(text));
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
