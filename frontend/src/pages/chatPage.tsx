import { AppBar, Button, styled, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import Popup from '../components/popupDelete';  // Import the Popup component
import './styles/Toolbar.css';
import { useNavigate } from 'react-router-dom';

// Styled button
const WhiteButton = styled(Button)({
  color: '#000000', // Black text color
  backgroundColor: '#ffffff', // White background color
  marginBottom: '10px',
  height: '50px',
  '&:hover': {
    backgroundColor: '#cccccc', // Grey background color on hover
  },
});

export const ChatApp = () => {
  const [messages, setMessages] = useState<string[]>([]);  // List of chat messages
  const [message, setMessage] = useState('');  // Current message being typed
  const [ws, setWs] = useState<WebSocket | null>(null);  // WebSocket connection
  const [showPopup, setShowPopup] = useState(true);  // State to handle popup visibility

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080/ws');  // Create a WebSocket connection
    setWs(socket);  // Store the WebSocket connection

    socket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);  // Add new message to chat history
    };

    socket.onerror = (error) => {
      console.error('WebSocket Error: ', error);
    };

    // Cleanup WebSocket when component is unmounted
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);  // Empty dependency array means this runs only once on mount

  const sendMessage = () => {
    if (ws && message) {
      ws.send(message);  // Send message through WebSocket
      setMessage('');  // Clear message input after sending
    }
  };

  const closePopup = () => {
    setShowPopup(false);  // Close the popup
  };
  
  const navigate = useNavigate();

  return (
    <div>
      {showPopup && <Popup onClose={closePopup} />}  {/* Always show the popup when showPopup is true */}

      <AppBar sx={{ zIndex: 0 }}>
        <Toolbar className='Toolbar' sx={{ background: 'black' }}>
          The Silk Road Chatroom
        </Toolbar>
      </AppBar>

      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}  // Update message input
        placeholder="Write a message..."
        style={{ width: '100%', padding: '10px', fontSize: '16px', margin: '10px 0' }}  // Make input bigger and cleaner
      />
      <WhiteButton variant="contained" fullWidth onClick={sendMessage}>
        Send
      </WhiteButton>
        <Button onClick={() => navigate('/Home')} // Navigate to Home page
                    sx={{
                        background: 'black', 
                        color: 'white', 
                        fontSize: '24px', 
                        padding: '13px 30px', 
                        position: 'absolute', 
                        top: '-4px',
                        left: '650px', 
                        zIndex: 1,
                        fontFamily: 'Times New Roman'
                    }}>
                    Home
        </Button>
        <Button onClick={() => navigate('/Settings')} // Navigate to settings page
                    sx={{
                    background: 'black', 
                    color: 'white', 
                    fontSize: '24px', 
                    padding: '13px 30px', 
                    position: 'absolute', 
                    top: '-4px', 
                    right: '0px', 
                    zIndex: 1,
                    fontFamily: 'Times New Roman'
                          }}>
                        Settings
                </Button>
    </div>
  );
};
