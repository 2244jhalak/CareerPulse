/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/VoiceSearch.js
// src/VoiceSearch.js
// src/VoiceSearch.js
import React, { useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';

const VoiceSearch = ({ onSearch }) => {
  const [isListening, setIsListening] = useState(false);

  const handleListen = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onSearch(transcript);
      recognition.stop();
    };

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  return (
    <div>
      <button className='btn btn-circle ml-5' onClick={handleListen}><FaMicrophone className="cursor-pointer text-2xl" /></button>
      {isListening && <span>Listening...</span>}
    </div>
  );
};

export default VoiceSearch;
