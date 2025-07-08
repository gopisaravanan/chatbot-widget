import { useState } from 'react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    setMessages(prev => [...prev, {
      text: inputText,
      isBot: false,
      timestamp: new Date()
    }]);
    setInputText('');
    
    // Simulate bot response (you can replace this with actual API call)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I'm a simple bot. I'll be smarter soon!",
        isBot: true,
        timestamp: new Date()
      }]);
    }, 1000);
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <h4>🤖 AI Assistant</h4>
          <span className="status-indicator">Online</span>
        </div>

        <div className="messages-container">
          {messages.length === 0 ? (
            <div className="empty-state">
              Send a message to start the conversation
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`message ${msg.isBot ? 'bot' : 'user'}`}
              >
                <div className="message-content">{msg.text}</div>
                <div className="message-timestamp">
                  {msg.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="input-container">
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="message-input"
          />
          <button 
            onClick={handleSendMessage}
            className="send-button"
            disabled={!inputText.trim()}
          >
            Send
          </button>
        </div>
      </div>

      <style>{`
        .chatbot-wrapper {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .chatbot-container {
          border: 1px solid #e1e1e1;
          border-radius: 12px;
          width: 350px;
          height: 500px;
          display: flex;
          flex-direction: column;
          background: white;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        }

        .chatbot-header {
          padding: 1rem;
          background: #f8f9fa;
          border-bottom: 1px solid #e1e1e1;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .chatbot-header h4 {
          margin: 0;
          color: #2c3e50;
          font-size: 1.1rem;
        }

        .status-indicator {
          font-size: 0.8rem;
          color: #28a745;
          display: flex;
          align-items: center;
        }

        .status-indicator::before {
          content: '';
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #28a745;
          border-radius: 50%;
          margin-right: 5px;
        }

        .messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .empty-state {
          color: #6c757d;
          text-align: center;
          margin: auto;
          font-size: 0.9rem;
        }

        .message {
          max-width: 80%;
          padding: 0.5rem 1rem;
          border-radius: 1rem;
          animation: fadeIn 0.3s ease-in;
        }

        .message.user {
          align-self: flex-end;
          background: #007bff;
          color: white;
          border-bottom-right-radius: 0.25rem;
        }

        .message.bot {
          align-self: flex-start;
          background: #f8f9fa;
          color: #2c3e50;
          border-bottom-left-radius: 0.25rem;
        }

        .message-timestamp {
          font-size: 0.7rem;
          margin-top: 0.25rem;
          opacity: 0.8;
          text-align: right;
        }

        .input-container {
          padding: 1rem;
          border-top: 1px solid #e1e1e1;
          display: flex;
          gap: 0.5rem;
        }

        .message-input {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid #e1e1e1;
          border-radius: 1.5rem;
          outline: none;
          font-size: 0.9rem;
          transition: border-color 0.2s;
        }

        .message-input:focus {
          border-color: #007bff;
        }

        .send-button {
          padding: 0.75rem 1.5rem;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 1.5rem;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }

        .send-button:hover:not(:disabled) {
          background: #0056b3;
        }

        .send-button:disabled {
          background: #e1e1e1;
          cursor: not-allowed;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ChatBot;
