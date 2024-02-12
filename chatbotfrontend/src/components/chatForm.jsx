import { useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const ChatForm = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    
    backgroundColor: '#0F1035',
    alignItems: 'center',

    minWidth: '350px',
  
    borderRadius: 2,

    boxShadow: '0px 0px 10px 5px rgba(12,10,128,0.25)',
    border: '2px solid #211C6A',
});


const ChatButton = styled(Button)({

    borderRadius: '0',
    backgroundColor: '#211C6A',

    height: '46px'
});

const InputField = styled(Input)({
  
    width: '300px',
 
    color: 'black',
 
    padding: 6,
    backgroundColor: 'white'
});





async function getResponseFromBot(message) {
    const gptResponse = await axios.post(`https://localhost:44366/api/gpt?message=${message}`);
    return gptResponse.data;
}

function Chatform() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const MessageChanged = (event) => {
        setMessage(event.target.value);
    };

    const SubmitMessage = () => {
        if (message.trim() !== '') {
            const newM = { id: Date.now(), message: message, reply: null };
            setChatHistory([...chatHistory, newM]);
            setMessage('');
            sendMandGetit(newM);
        }
    };

    const sendMandGetit = async (newMessage) => {
        const response = await getResponseFromBot(newMessage.message);
        
        setChatHistory(prevChatHistory => {
            return prevChatHistory.map(item => {
                if (item.id === newMessage.id) {
                    return { ...item, reply: response };
                }
                return item;
            });
        });
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', minWidth: '600px' }}>
            <ChatForm>
                <div className="parent" style={{ overflow: 'auto', borderRadius: '5px', width: '100%', height: '50vh', flexDirection: 'column' }}>
                    {chatHistory.map((item, index) => (
                        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <div style={{ backgroundColor: '#1B1A55', borderRadius: '10px', padding: '5px 15px', margin: '5px', maxWidth: '200px' }}>
                                {item.message}
                            </div>
                            {item.reply && (
                                <div style={{ backgroundColor: '#070F2B', borderRadius: '10px', padding: '5px 15px', marginLeft: '40%', maxWidth: '200px' }}>
                                    {item.reply}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div>
                    <InputField
                        variant="outlined"
                        placeholder="Chat with me"
                        value={message}
                        onChange={MessageChanged}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                SubmitMessage();
                            }
                        }}
                    />
                    <ChatButton variant="contained" onClick={SubmitMessage}>
                        Send
                    </ChatButton>
                </div>
            </ChatForm>
        </div>
    );
} 

export default Chatform;