import React from 'react';

const MessageBox = ({ message }) => {
  if (!message) return null;

  return (
    <div className={`message-box show ${message.type}`}>
      {message.text}
    </div>
  );
};

export default MessageBox;