import React, { createContext, Component, useContext, useReducer } from "react";
import { MessageProps } from "../components/message";

export interface GlobalState {
  identity: string;
  token: string;
  channel?: any;
  roomName?: string;
  messages: MessageProps[];
}

interface IChatContext {
  state: Partial<GlobalState>;
  setState: any;
}

export const ChatContext = createContext<any>({});

const DEFAULT_STATE: GlobalState = {
  identity: "",
  roomName: "",
  token: "",
  channel: null,
  messages: []
  // sessionId: false,
};

interface Action {
  type: string;
  payload: GlobalState;
}

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "join":
      const {
        payload: { token, identity, roomName, channel }
      } = action;
      console.log("actions", { token, identity, roomName, channel });
      return {
        ...state,
        token: token!,
        identity: identity!,
        roomName: roomName!,
        channel: channel!
      };

    case "set-active-room":
      return { ...state, channel: action.payload.channel };

    case "add-message":
      return { ...state, messages: action.payload.messages! };

    case "disconnect":
      state.channel && state.channel.disconnect();
      return DEFAULT_STATE;

    default:
      return DEFAULT_STATE;
  }
};

export const ChatProvider = ({ children }: any) => {
  return (
    <ChatContext.Provider value={useReducer(reducer, DEFAULT_STATE)}>
      {children}
    </ChatContext.Provider>
  );
};

// export const useChatContext = () => {
//   const [state, dispatch ] = useContext(ChatContext);
//   return { state, setState };
// };
