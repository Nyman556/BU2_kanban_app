using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddDbContext<ApplicationDbContext>(options =>
        {
            options.UseNpgsql(
                "Host=localhost;Database=kanban;Username=postgres;Password=NewPassword"
            );
        });

        builder.Services.AddAuthentication().AddBearerToken(IdentityConstants.BearerScheme);

        builder
            .Services.AddIdentityCore<User>(options =>
            {
                // lägg till alternativ för Användaren här framöver: t.ex email confirm etc
            })
            .AddEntityFrameworkStores<ApplicationDbContext>()
            .AddApiEndpoints();

        builder.Services.AddScoped<GroupService>();

        builder.Services.AddControllers();

        var app = builder.Build();

        app.UseCors(builder =>
        {
            builder
                .WithOrigins("http://localhost:5173") // Replace with your frontend URL
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials(); // Allow credentials if your frontend sends them
        });

        app.UseHttpsRedirection();
        app.MapIdentityApi<User>();
        app.MapControllers();
        app.UseAuthentication();

        app.Run();
    }
}
