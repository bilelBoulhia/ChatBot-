using Microsoft.AspNetCore.Mvc;

using OpenAI_API;
using OpenAI_API.Chat;
using OpenAI_API.Completions;

namespace chatbot.Interfaces
{
    public interface gptInterface
    {



        Task<string> DataRecieved(OpenAIAPI openAIAPI, ChatRequest request,string message);

    }
}
