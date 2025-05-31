import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../css/Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null); // Reference to the chat bottom

  const sendMessage = async () => {
    if (!input.trim()) return;
    try {
      const { data } = await axios.get(`http://localhost:8000/chatbot/?message=${input}`);
      setMessages([...messages, { user: input, bot: data.reply }]);
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]); // Scrolls to bottom when messages update

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((msg, i) => (
          <p key={i}><strong>You:</strong> {msg.user} <br/><strong>Bot:</strong> {msg.bot}</p>
        ))}
        <div ref={messagesEndRef} /> {/* Invisible element that triggers scrolling */}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress} // Allow Enter key to send
        placeholder="Ask me anything..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
