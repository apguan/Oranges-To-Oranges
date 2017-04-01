import React from 'react';
import Input from './ChatInput.jsx';
import Messages from './ChatMessages.jsx';
import io from 'socket.io-client';
// import 'bootstrap/dist/css/bootstrap.css';

const socket = io();

class ChatWindow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      messages: []
    }
    this.messageSubmit = this.messageSubmit.bind(this)
    // this.messageReceive = this.messageReceive.bind(this)
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
    socket.emit('send:message', message)
  }

  render() {
    return(
      <div>
        <div className="chat">
          <h3>Game Chat</h3>
        </div>
        <div>
          <Messages message={this.state.messages}/>
          <Input submit={this.messageSubmit} />
        </div>
      </div>
    )
  }

}

export default ChatWindow;
