import React from "react";

function Message({ type, text }) {
  const colors = {
    success: "green",
    error: "red",
    default: "black",
  };

  const messageStyles = {
    color: colors[type] || colors.default,

  };
  return <p style={messageStyles}>{text}</p>;
}

export default Message;
