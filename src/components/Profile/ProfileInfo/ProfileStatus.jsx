import React from "react";

class ProfileStatus extends React.Component {
  componentDidMount() {

  }
  state = {
    editMode: false,
    status: this.props.status
  };
  activateEditmode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {

      this.setState({
        status: this.props.status
      })
    }
  }
  render() {
    return (
      <>
        <div>{!this.state.editMode && <span
          onDoubleClick={this.activateEditmode}
        >{this.props.status || '-------'}</span>}</div>
        <div>{this.state.editMode && <input
          onChange={this.onStatusChange}
          autoFocus={true}
          onBlur={this.deactivateEditMode}
          value={this.state.status} />}</div>
      </>
    );
  }
}

export default ProfileStatus;
