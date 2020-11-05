import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }; 
  activateEditmode() {
      this.setState({
        editMode:true
      })
  }
  deactivateEditMode(){
    this.setState({
        editMode:false
      })
  }
  render() {
    return (
      <>
        <div>{!this.state.editMode && <span
            onDoubleClick = {this.activateEditmode.bind(this)}
        >{this.props.status}</span>}</div>
        <div>{this.state.editMode && <input
        autoFocus = {true} 
            onBlur={this.deactivateEditMode.bind(this)}
        value={this.props.status} />}</div>
      </>
    );
  }
}

export default ProfileStatus;
