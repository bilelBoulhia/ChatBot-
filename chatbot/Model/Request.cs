using OpenAI_API.Chat;
using OpenAI_API.Completions;

namespace chatbot.Model
{
    public class Request : ChatRequest
    {
      
        public Request()
        {

            this.Model = OpenAI_API.Models.Model.ChatGPTTurbo;
            this.MaxTokens = 500;
            this.PresencePenalty = 0;
       
          

        }
    }
}
