## Backend

cd backend
dotnet restore
dotnet build
dotnet run

## Paket:

# EntityFramework

dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
dotnet add package Microsoft.EntityFrameworkCore.Design

# IdentityCore

dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore
