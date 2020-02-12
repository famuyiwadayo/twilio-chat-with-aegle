import React, { useEffect } from "react";
// import useTwilioChat from "../hooks/use-twilio";
import MessageForm from "./messageFrom";
import MessageList from "./messageList";
import { navigate } from "@reach/router";
import useTwilioChat from "../hooks/useTwilioChat";

const ChatDisplay = ({ roomID }: any) => {
  // let videoRef = useRef();
  const { state, handleNewMessage } = useTwilioChat();
  // console.log("video Display", videoRef)

  //   useEffect(() => {
  //     // videoRef.current = document.querySelector('.chat');
  //     if (!state.token) {
  //       navigate("/", { state: { roomName: roomID } });
  //     }

  //     // if (!state.channel) {
  //     //   startVideo()
  //     // }
  //     // window.addEventListener("beforeunload", leaveRoom)

  //     // return () => {
  //     //   window.addEventListener("beforeunload", leaveRoom)
  //     // }
  //   }, [state, roomID]);
  return (
    <>
      {/* <h1>Room: {roomID}</h1>
      {state.room && (
        <button className="leave-room" onClick={leaveRoom}>
          Leave Room
        </button>
      )} */}
      <MessageList messages={state!.messages!} />
      <MessageForm onMessageSend={handleNewMessage} />
    </>
  );
};

export default ChatDisplay;
