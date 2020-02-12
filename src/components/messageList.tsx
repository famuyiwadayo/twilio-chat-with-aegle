import React, { Component } from "react";
import PropTypes from "prop-types";
import Message, { MessageProps } from "./message";
import "./Message.css";

interface MessageListProps {
  messages: MessageProps[];
}

class MessageList extends Component<MessageListProps, any> {
  node: any;

  constructor(props: MessageListProps) {
    super(props);
  }

  componentDidUpdate = () => {
    this.node.scrollTop = this.node.scrollHeight;
  };

  render() {
    return (
      <div className="MessageList" ref={node => (this.node = node)}>
        {this.props.messages.map((message, i) => (
          <Message key={i} {...message} />
        ))}
      </div>
    );
  }
}

export default MessageList;
