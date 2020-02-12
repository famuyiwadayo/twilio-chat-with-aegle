import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Message.css";

export interface MessageProps {
  author: string;
  body: string;
  me: boolean;
}

class Message extends Component<MessageProps, any> {
  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    const classes = classNames("Message", {
      log: !this.props.author,
      me: this.props.me
    });

    return (
      <div className={classes}>
        {this.props.author && (
          <span className="author">{this.props.author}:</span>
        )}
        {this.props.body}
      </div>
    );
  }
}

export default Message;
