import { useSelector, useDispatch } from "react-redux";
import {
  setActiveGroup,
  selectActiveGroup,
  addMessage,
} from "./features/chatSlice";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";

function App() {
  const dispatch = useDispatch();
  const activeGroup = useSelector(selectActiveGroup);

  const handleSendMessage = (message) => {
    dispatch(
      addMessage({ sender: "User", text: message, timestamp: new Date().getTime() })
    );
  };

  return (
    <div className="flex h-screen">
      <Sidebar onGroupSelect={(groupId) => dispatch(setActiveGroup(groupId))} />
      <ChatBox group={activeGroup} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
