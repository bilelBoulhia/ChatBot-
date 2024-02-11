using chatbot.Interfaces;
using chatbot.Model;
using chatbot.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<gptInterface, gptRepo>();
builder.Services.AddSingleton<Request>();


var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

 
}



app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
