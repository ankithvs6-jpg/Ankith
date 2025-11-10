
import React, { useState } from 'react';
import type { Message } from '../types';
import { PaperPlaneIcon } from './icons/PaperPlaneIcon';

const initialMessages: Message[] = [
  {
    id: 1,
    sender: 'user',
    text: 'Rivers',
  },
  {
    id: 2,
    sender: 'bot',
    text: (
      <div className="space-y-4">
        <p>
          Karnataka's river systems are crucial to its agriculture and ecosystem. They are broadly classified into two groups: east-flowing and west-flowing rivers.
        </p>
        <div>
          <h3 className="font-bold text-lg mb-2">The Krishna River System</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Origin:</strong> Mahabaleshwar in Maharashtra.</li>
            <li><strong>Major Tributaries in Karnataka:</strong> Bhima, Tungabhadra, Ghataprabha, Malaprabha.</li>
            <li><strong>Impact:</strong> The northern plains of Karnataka, known as the 'Rice Bowl of Karnataka', are irrigated by this system.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">The Cauvery (Kaveri) River System</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Origin:</strong> Talakaveri in the Western Ghats, Kodagu district.</li>
            <li><strong>Major Tributaries in Karnataka:</strong> Hemavati, Shimsha, Arkavati, Kabini.</li>
            <li><strong>Impact:</strong> It is the lifeline for southern Karnataka, supporting agriculture in districts like Mandya and Mysuru. The Krishnaraja Sagara (KRS) dam is a major reservoir on this river.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    const newUserMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: input,
    };
    setMessages([...messages, newUserMessage]);
    setInput('');
    // Here you would call the Gemini API
  };

  const handleQuickReply = (text: string) => {
     const newUserMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text,
    };
    // In a real app, we would send this to the bot and get a response
    setMessages([...messages, newUserMessage]);
  }

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-white">
      <header className="flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm shadow-md sticky top-0 z-10">
        <span className="text-2xl mr-3">😊</span>
        <h1 className="text-xl font-bold">Karnataka GeoBot</h1>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-end gap-2 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.sender === 'bot' && <div className="text-2xl mb-1">🤖</div>}
            <div
              className={`max-w-md lg:max-w-2xl rounded-2xl p-4 text-left ${
                message.sender === 'user'
                  ? 'bg-blue-600 rounded-br-none'
                  : 'bg-gray-800 text-gray-200 rounded-bl-none'
              }`}
            >
              {typeof message.text === 'string' ? (
                <p>{message.text}</p>
              ) : (
                message.text
              )}
            </div>
          </div>
        ))}
      </main>

      <footer className="bg-slate-900/80 backdrop-blur-sm p-4 sticky bottom-0">
        <div className="max-w-3xl mx-auto">
            <div className="flex justify-center items-center gap-2 mb-3 flex-wrap">
                {['Rivers', 'Mountains', 'Districts', 'Climate'].map(topic => (
                    <button key={topic} onClick={() => handleQuickReply(topic)} className="bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm px-4 py-1.5 rounded-full transition-colors">
                        {topic}
                    </button>
                ))}
            </div>
            <div className="flex items-center gap-3 bg-gray-800 rounded-full p-2">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question…"
                className="w-full bg-transparent focus:outline-none px-3 text-gray-200 placeholder-gray-400"
            />
            <button
                onClick={handleSend}
                className="bg-green-500 hover:bg-green-600 rounded-full p-3 transition-colors flex-shrink-0"
            >
                <PaperPlaneIcon />
            </button>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default ChatScreen;
