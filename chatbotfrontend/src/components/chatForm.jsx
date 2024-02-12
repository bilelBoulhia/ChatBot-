import { useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const ChatForm = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    
    backgroundColor: '#3887BE',
    alignItems: 'center',
  
 
  
    borderRadius: 3,

   
});


const ChatButton = styled(Button)({

    borderRadius: '0',
    backgroundColor: '#213555',

    height: '43px'
});

const InputField = styled(Input)({
  
    width: '300px',
 
    color: 'black',
 
    padding: 5,
    backgroundColor: 'white'
});





async function getResponseFromBot(message) {
    const gptResponse = await axios.post(`https://localhost:44366/api/gpt?message=${message}`);
    return gptResponse.data;
} 


function Chatform() {
    const [chatState, setChatState] = useState({
        message: '',
        chatHistory: [],
        replyHistory: []
    });

    const handleMessageChange = (event) => {
        setChatState(prevState => ({
            ...prevState,
            message: event.target.value
        }));
    };


    const handleSubmit = async () => {
        if (chatState.message.trim() !== '') {
            setChatState(prevState => ({
                ...prevState,
                chatHistory: [...prevState.chatHistory, chatState.message]
            }));

             putAreply(chatState.message);

            setChatState(prevState => ({
                ...prevState,
                message: ''
            }));
        }
    };


    const putAreply = async (message) => {
        const response = await getResponseFromBot(message);
        setChatState(prevState => ({
            ...prevState,
            replyHistory: [...prevState.replyHistory, response]
        }));
    };

    /*
 



    function Chatform() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [replyHistory, setReplyHistory] = useState([]);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async () => {
        if (message.trim() !== '') {
            setChatHistory([...chatHistory, message]);

           
            putAreply(message);

            setMessage('');
        }
    };

      const putAreply = async (message) => {
        const response = await getResponseFromBot(message);
        setReplyHistory([...replyHistory, response]);
    };




          {replyHistory.map((reply, index) =>
                         ( 

                             <div style={{ display: 'table', width: 'fit - content', backgroundColor: '#1B1A55', marginLeft: '5px', padding: '5px 15px 5px 5px', borderRadius: '10px', margin: '5px 0 0 5px',maxWidth : '200px' }} key={index}>
                            {reply}
                        </div>



                         ))}

    */





    


 

    return (




        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', minWidth: '600px' }}>

          



            <ChatForm>

                <div style={{  borderRadius: '5px', width: '100%', height: '50vh', flexDirection: 'column' }}>

                   

                    {chatState.chatHistory.map((msg, index) =>
                        (
                            <div style={{ display: 'table', width: 'fit - content', backgroundColor: '#213555', marginLeft: '5px', padding: '5px 15px 5px 5px', borderRadius: '10px', margin: '5px 0 0 5px', maxWidth: '200px' }} key={index}>
                                {msg}
                            </div>
                          
                        ))}

                   
                    
                  







                </div>





                <div>

                   

                    <InputField
                        variant="outlined"
                        placeholder="Chat with me"
                        value={chatState.message}
                        onChange={handleMessageChange}
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                handleSubmit();
                            }
                        }}
                    />

             

                    <ChatButton variant="contained" onClick={handleSubmit}>
                        Send
                    </ChatButton>

                </div>

              
      
            </ChatForm>
        </div>
    );
}

export default Chatform;
