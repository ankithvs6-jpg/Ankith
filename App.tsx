
import React, { useState } from 'react';
import LandingScreen from './components/LandingScreen';
import ChatScreen from './components/ChatScreen';

function App() {
  const [screen, setScreen] = useState<'landing' | 'chat'>('landing');

  const handleStartChat = () => {
    setScreen('chat');
  };

  return (
    <div className="font-sans antialiased">
      {screen === 'landing' ? (
        <LandingScreen onStartChat={handleStartChat} />
      ) : (
        <ChatScreen />
      )}
    </div>
  );
}

export default App;
