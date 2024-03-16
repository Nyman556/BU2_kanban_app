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
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 6;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
            })
            .AddEntityFrameworkStores<ApplicationDbContext>()
            .AddApiEndpoints();

        builder.Services.AddScoped<GroupService>();
        builder.Services.AddScoped<TaskService>();

        builder.Services.AddControllers();

        var app = builder.Build();

        app.UseCors(builder =>
        {
            builder
                .WithOrigins("http://localhost:5173")
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials();
        });

        app.UseHttpsRedirection();
        app.MapIdentityApi<User>();
        app.MapControllers();
        app.UseAuthentication();

        app.Run();
    }
}
