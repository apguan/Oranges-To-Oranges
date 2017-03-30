import React from 'react';
<<<<<<< 1ca69d74abd8827feb75bb1fe053a201ce634c45
=======
import $ from 'jquery';
>>>>>>> imported logout component to lobby.jsx
import Input from './ChatInput.jsx';
import Messages from './ChatMessages.jsx';
import io from 'socket.io-client';
// import 'bootstrap/dist/css/bootstrap.css';

const socket = io();

class ChatWindow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
<<<<<<< 1ca69d74abd8827feb75bb1fe053a201ce634c45
      messages: []
    }
    this.messageSubmit = this.messageSubmit.bind(this)
  }

  componentWillMount() {
    console.log('componentWillMount has run')
    socket.on('send:message', (message) =>{
      console.log(message);
      var newMessage = this.state.messages
      newMessage.push(message)
      this.setState({messages: newMessage})
    })
  }

  messageSubmit(message) {
    var newMessage = this.state.messages
    newMessage.push(message)
    this.setState({messages: newMessage})
    console.log(this.state.messages)
=======
      messages: [],
      text: ''
    }
    this.messageSubmit = this.messageSubmit.bind(this)
    this.messageReceive = this.messageReceive.bind(this)

    socket.on('send:message', this.messageReceive)

  }

  messageReceive(message) {
    this.state.message.push(message)
  }

  messageSubmit(message) {
    this.state.message.push(message)
>>>>>>> imported logout component to lobby.jsx
    socket.emit('send:message', message)
  }

  render() {
<<<<<<< 1ca69d74abd8827feb75bb1fe053a201ce634c45
    const divStyle = {
      position: 'relative',
      display: 'inline-block'
    }
    const componentStyle = {
      position: 'absolute',
      width: '15%'
    }
    return(
      <div>
        <div className="chat">
          <h3>Game Chat</h3>
        </div>
        <div style={divStyle}>
          <Messages message={this.state.messages} style={componentStyle} />
          <Input userName={this.props.userName} submit={this.messageSubmit} style={componentStyle} />
        </div>
=======
    return(
      <div className="chat">
        <h3>Game Chat</h3>
        <Messages message={this.state.messages}/>
        <Input submit={this.messageSubmit}/>
>>>>>>> imported logout component to lobby.jsx
      </div>
    )
  }

}

export default ChatWindow;
