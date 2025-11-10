
import React, { useState } from 'react';
import { MonumentIcon } from './icons/MonumentIcon';

interface LandingScreenProps {
  onStartChat: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onStartChat }) => {
  const [language, setLanguage] = useState<'en' | 'kn'>('en');

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-green-200 via-teal-300 to-blue-400 overflow-hidden text-white">
      {/* Background shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-green-300/50 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-300/50 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-[20%] right-[15%] w-64 h-64 bg-teal-200/50 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      {/* Monument Silhouettes */}
      <div className="absolute bottom-0 left-5 opacity-10 text-gray-900/50">
        <MonumentIcon className="w-48 h-48" />
      </div>
      <div className="absolute top-0 right-5 opacity-10 text-gray-900/50 transform scale-x-[-1]">
         <MonumentIcon className="w-32 h-32" />
      </div>

      <main className="relative z-10 flex flex-col items-center text-center p-4">
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl max-w-md w-full">
          <div className="text-6xl mb-4">🤖</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Karnataka Geography Chatbot
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-2 text-gray-200">
            ಕರ್ನಾಟಕ ಭೂಗೋಳದ ಚಾಟ್‌ಬಾಟ್
          </h2>
          <p className="mt-4 text-gray-100">
            Explore Karnataka’s land, rivers & culture
          </p>
          <p className="text-gray-200">
            ಕರ್ನಾಟಕದ ಭೂಮಿಗಳು, ನದಿಗಳು ಮತ್ತು ಸಂಸ್ಕೃತಿಯನ್ನು ಅನ್ವೇಷಿಸಿ
          </p>
          <button
            onClick={onStartChat}
            className="mt-8 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105"
          >
            Start Chat / ಸಂಭಾಷಣೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿ
          </button>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-gray-800">Language | ಭಾಷೆ</h3>
          <div className="flex justify-center gap-4 mt-2">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                language === 'en'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'bg-black/20 text-white'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('kn')}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                language === 'kn'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'bg-black/20 text-white'
              }`}
            >
              ಕನ್ನಡ
            </button>
          </div>
        </div>
      </main>
      <style>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: -2s;
        }
        .animation-delay-4000 {
          animation-delay: -4s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default LandingScreen;
