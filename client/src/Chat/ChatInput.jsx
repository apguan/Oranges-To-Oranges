import React from 'react';
import $ from 'jquery';

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeHandler(e) {
    this.setState({text: e.target.value})
<<<<<<< 1ca69d74abd8827feb75bb1fe053a201ce634c45
    console.log(this.state.text)
  }

  handleSubmit(e) {
//preventDefault() prevents the native HTML form from refreshing the page when it is submitted
    e.preventDefault();
    var message = {
      username: this.props.userName,
      text: this.state.text
    }
    if (this.state.text !== '') {
      this.props.submit(message)
    }
    // this.props.messageReceive(message)
=======
  }

  handleSubmit(e) {
    e.preventDefault();
    var message = {
      text: this.state.text
    }
    this.props.submit(message)
>>>>>>> imported logout component to lobby.jsx
    this.setState({text: ''})
  }

  render() {
    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
<<<<<<< 1ca69d74abd8827feb75bb1fe053a201ce634c45
          <input type="text" onChange={this.changeHandler} value={this.state.text} placeholder="type here..." />
          <input type="submit" value="Send!" />
=======
          <input onChange={this.changeHandler} value={this.state.text}></input>
>>>>>>> imported logout component to lobby.jsx
        </form>
      </div>
    )
  }
}

export default Input;
