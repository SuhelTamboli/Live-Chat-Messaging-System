import { useState } from "react";
import { format } from "date-fns";

const ChatBox = ({ group, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage("");
      setIsTyping(false);
    }
  };

  const handleonChange = (e) => {
    setNewMessage(e.target.value);
    setIsTyping(true);
  };

  return (
    <div className="flex-1 bg-white">
      <div className="h-14 bg-emerald-600 text-white pb-2 pl-2 flex flex-col justify-between">
        <h2 className="text-2xl font-bold">{group.name}</h2>
        {isTyping && <p className="p-0 m-0">User isTyping...</p>}
      </div>
      <div className="h-3/4 overflow-y-auto p-4">
        {group.messages.map((message) => (
          <>
            {message.sender === "User" ? (
              <div className="flex flex-col p-1 border border-gray-400 rounded-md mb-0.5">
                <div key={message.id} className=" flex justify-end">
                  <strong className="pr-1">{message.sender}:</strong>{" "}
                  {message.text}
                </div>
                <div className="text-sm text-gray-500 flex justify-end">
                  {/* Format timestamp to display only time in HH:mm */}
                  {format(new Date(message.timestamp), "HH:mm")}
                </div>
              </div>
            ) : (
              <div className="flex flex-col p-1 border border-gray-400 rounded-md mb-0.5">
                <div key={message.id} className="">
                  <strong className="pr-1">{message.sender}:</strong>{" "}
                  {message.text}
                </div>
                <div className="text-sm text-gray-500 ">
                  {/* Format timestamp to display only time in HH:mm */}
                  {format(new Date(message.timestamp), "HH:mm")}
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="mt-4 flex p-4">
        <input
          type="text"
          className="border p-2 w-full"
          value={newMessage}
          onChange={(e) => handleonChange(e)}
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="bg-emerald-600 text-white p-2 ml-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
