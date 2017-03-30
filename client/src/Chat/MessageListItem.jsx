import React from 'react';

var MessageListItem = function(props) {
<<<<<<< 1ca69d74abd8827feb75bb1fe053a201ce634c45

  var style = {
    backgroundColor: '#C4D8E2',
    borderRadius: '5px',
    padding: '10px',
    margin: '3px 20px',
    textAlign: 'right',
    float: 'right',
    clear: 'right'
  } 

  var pStyle = {
    textDecoration: 'underline'
  }
  return(

    <div className="message" style={style}>
      <p style={pStyle}>{props.msg.username}</p>
      <span>{props.msg.text}</span>
    </div>
=======
  return(
    <li className="message-items">{this.props.msg}</li>
>>>>>>> imported logout component to lobby.jsx
  )
}

export default MessageListItem;
