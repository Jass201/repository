import React, { useState, useRef, useEffect } from 'react';
import './ChatMain.css';
import { FcAddImage } from "react-icons/fc";
import { FcOldTimeCamera } from "react-icons/fc";

interface Message {
  id: number;
  text: string;
  senderId: string;
  receiverId: string;
  timestamp: string;
}

interface Person {
  id: string;
  name: string;
  previewMessage: string;
}

function ChatMain() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentUserId = 'currentUser';

  const people: Person[] = [
  { id: 'Jan Ja', name: 'Jan Ja', previewMessage: 'Dit is een test bericht. Als je dit ziet, ben je niet blind.' },
  { id: 'Bekir Se', name: 'Bekir Se', previewMessage: 'Dit is een test bericht. Als je dit ziet, ben je niet blind.' },
  { id: 'Timon Ti', name: 'Timon Ti', previewMessage: 'Dit is een test bericht. Als je dit ziet, ben je niet blind.' },
  { id: 'Matthew Ma', name: 'Matthew Ma', previewMessage: 'Dit is een test bericht. Als je dit ziet, ben je niet blind.' },
  { id: 'Jasmeet Ja', name: 'Jasmeet Ja', previewMessage: 'Dit is een test bericht. Als je dit ziet, ben je niet blind.' },
  { id: 'Stefan St', name: 'Stefan St', previewMessage: 'Dit is een test bericht. Als je dit ziet, ben je niet blind.' },
  { id: 'Tarik Ta', name: 'Tarik Ta', previewMessage: 'Dit is een test bericht. Als je dit ziet, ben je niet blind.' },
  { id: 'Abdel Ab', name: 'Abdel Ab', previewMessage: 'Dit is een test bericht. Als je dit ziet, ben je niet blind.' },
  { id: 'Robert Ro', name: 'Robert Ro', previewMessage: 'Dit is een test bericht. Als je dit ziet, ben je niet blind.' },
  { id: 'Dani Da', name: 'Dani Da', previewMessage: 'Dit is een test bericht. Als je dit ziet, ben je niet blind.' },
];

const handleSendMessage = () => {
  if (inputText.trim() !== '' && selectedPerson) {
    const newMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      senderId: currentUserId,
      receiverId: selectedPerson,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  }
};
  
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const selectedPersonName = people.find(person => person.id === selectedPerson)?.name;

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {

      console.log(file);
    }
  };

  const handleButtonClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const inputFotoRef = useRef<HTMLInputElement>(null);

  const handleCapture = (event) => {
  const file = event.target.files[0];
  if (file) {

    console.log(file);
  }
  };

  const handleButtonFotoClick = () => {
    if (inputFotoRef.current) {
      inputFotoRef.current.click();
    }
  };

  return (
    <div className="chat">
      <div className='list-people'>
        {people.map(person => (
          <a key={person.id} className="people-block" onClick={() => setSelectedPerson(person.id)}>
            <h2>{person.name}</h2>
            <p>Message: "{person.previewMessage}"</p>
          </a>
        ))}
      </div>
      <div className="chat-main">
        {selectedPerson && (
          <div className="chat-header">
            <h2>{selectedPersonName}</h2>
          </div>
        )}
        <div className="messages">
        {messages.filter(msg => (msg.senderId === selectedPerson && msg.receiverId === currentUserId) || (msg.senderId === currentUserId && msg.receiverId === selectedPerson)).map((msg) => (
          <p key={msg.id} className={`message ${msg.senderId === currentUserId ? 'self' : 'other'}`}>
            {msg.text}
            <span className="message-timestamp">{msg.timestamp}</span>
          </p>
        ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="input">
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={inputFileRef}
            onChange={handleFileChange}
          />
          <button className='addImage' onClick={handleButtonClick}>
            <FcAddImage size={50} />
          </button>
          <input
            type="file"
            accept="image/*"
            capture="user"
            style={{ display: 'none' }}
            ref={inputFileRef}
            onChange={handleCapture}
          />
          <button className='addImage' onClick={handleButtonFotoClick}>
            <FcOldTimeCamera size={50}/>
          </button>
          <input
            type="text"
            className="message-input"
            placeholder="Type a message..."
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSendMessage} className='sendbutton'>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatMain;
