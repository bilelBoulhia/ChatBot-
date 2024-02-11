
using chatbot.Interfaces;
using chatbot.Model;
using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using OpenAI_API;
using OpenAI_API.Chat;



namespace chatbot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class gptController : ControllerBase
    {
      
        private readonly gptInterface _gptInterface;
        private readonly IConfiguration _configuration;
        private readonly Request _request;



        public gptController(gptInterface gptInterface, IConfiguration configuration)
        {


            this._configuration = configuration;
            this._request = new Request();
            this._gptInterface = gptInterface;
    
            
        }

     

     

       
        [HttpPost]
        public async Task<ActionResult> Post([FromQuery] string message)
        {
            var openai = new OpenAIAPI(_configuration["AppSettings:ApiKey"]);

            var result = await _gptInterface.DataRecieved(openai, _request,message);


            return Ok(result);
        }




    }
}
