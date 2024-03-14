## Backend

# Setup:

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

# Migrations

- skapa migration:
  dotnet ef migrations add <namn>

- för att uppdatera databasen
  dotnet ef database update

## Frontend

# Setup:

cd frontend
npm i
npm run dev

## Paket:

# Tailwind

# React Router

# react-cookie
