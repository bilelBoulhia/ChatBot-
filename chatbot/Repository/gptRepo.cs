using chatbot.Interfaces;

using OpenAI_API;
using OpenAI_API.Chat;
using OpenAI_API.Completions;


namespace chatbot.Repository
{
    public class gptRepo : gptInterface
    {


        public async Task<string> DataRecieved(OpenAIAPI openAIAPI, ChatRequest request ,string message)
        {
            var convo = openAIAPI.Chat.CreateConversation(request);

           
                convo.AppendUserInput(message);
     
                
                  

            var result = await convo.GetResponseFromChatbotAsync();


            return result;
        }


    }
}
