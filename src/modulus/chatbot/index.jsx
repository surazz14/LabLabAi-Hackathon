import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Avatar,
  TextField,
  Button,
  CircularProgress,
  Paper,
  Typography,
  makeStyles,
} from '@material-ui/core';

// Define styles with pink-red theme colors
const useStyles = makeStyles((theme) => ({
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  messagesArea: {
    flexGrow: 1,
    overflowY: 'auto',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  messageBubble: {
    borderRadius: '20px',
    padding: '8px 16px',
    maxWidth: '75%',
    wordWrap: 'break-word',
    display: 'inline-block',
    marginLeft: '8px',
    marginRight: '8px',
  },
  userBubble: {
    backgroundColor: '#e91e63', // Pink
    color: '#fff',
  },
  botBubble: {
    backgroundColor: '#fce4ec', // Light pink
    color: '#000',
  },
  userAvatar: {
    backgroundColor: '#e91e63', // Pink
  },
  botAvatar: {
    backgroundColor: '#f50057', // Red
  },
  inputArea: {
    padding: '8px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  loadingBubble: {
    backgroundColor: '#fce4ec', // Light pink
    borderRadius: '20px',
    padding: '8px 16px',
    maxWidth: '75%',
    display: 'inline-block',
    marginLeft: '8px',
  },
}));

function Chat() {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      console.log("this is messages",{messages,input})
      const newMessages = [...messages, { text: input, user: true }];
      setMessages(newMessages);
      setInput('');
      setLoading(true);

      setTimeout(() => {
        setMessages([...newMessages, { text: 'This is a response from ChatGPT.', user: false }]);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <Box className={classes.chatContainer}>
      <Box className={classes.messagesArea}>
        {messages.map((message, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent={message.user ? 'flex-end' : 'flex-start'}
            mb={1}
          >
            {!message.user && (
              <Box display="flex" alignItems="flex-start">
                <Avatar className={classes.botAvatar}>C</Avatar>
              </Box>
            )}
            <Paper
              elevation={3}
              className={`${classes.messageBubble} ${message.user ? classes.userBubble : classes.botBubble}`}
            >
              <Typography variant="body1">{message.text}</Typography>
            </Paper>
            {message.user && (
              <Box display="flex" alignItems="flex-start">
                <Avatar className={classes.userAvatar}>U</Avatar>
              </Box>
            )}
          </Box>
        ))}
        {loading && (
          <Box display="flex" justifyContent="flex-start" mb={1}>
            <Box display="flex" alignItems="flex-start">
              <Avatar className={classes.botAvatar}>C</Avatar>
            </Box>
            <Paper
              elevation={3}
              className={classes.loadingBubble}
            >
              <CircularProgress size={20} />
            </Paper>
          </Box>
        )}
        <div ref={messagesEndRef} />
      </Box>

      <Paper elevation={3} className={classes.inputArea}>
        <Box display="flex" alignItems="center">
          <TextField
            variant="outlined"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            fullWidth
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
          />
          <Button variant="contained" color="primary" onClick={handleSend} style={{ marginLeft: '8px' }}>
            Send
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Chat;
