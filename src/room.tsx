import React, { useEffect } from "react";
import { Router, navigate } from "@reach/router";
import ChatDisplay from "./components/chatDisplay";

const BounceToHome = ({ default: any }: any) => {
  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return null;
};

const Room = () => (
  <>
    <Router>
      <ChatDisplay path="room/:roomID" />
      <BounceToHome default />
    </Router>
  </>
);
