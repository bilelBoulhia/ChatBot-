using Microsoft.AspNetCore.DataProtection.KeyManagement;
using OpenAI_API;

namespace chatbot.Model
{
    public class OpenAiApi : OpenAIAPI
    {
     
   
       
      
        public OpenAiApi(IConfiguration configuration) : base(new APIAuthentication(configuration["AppSettings:ApiKey"]))
        {


          


        }

    }
}
