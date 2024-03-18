# Backend

## Setup:

cd backend  
dotnet restore  
dotnet build  
dotnet run

## Paket:

## EntityFramework

dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL  
dotnet add package Microsoft.EntityFrameworkCore.Design

## IdentityCore

dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore

## Migrations

- skapa migration:
  dotnet ef migrations add <namn>

- för att uppdatera databasen
  dotnet ef database update

# Frontend

## Setup:

cd frontend  
npm i  
npm run dev

## Paket:

# Tailwind

# React Router

# react-cookie



## Todo
- koppla addmember med user email. 
- lägg till policys 

problem 

vi får inte in email av en user för att koppla en user till en group

testat med members DTo tog bort cykel i databasen men den kunde inte koppla .troligtvis för att members i sig inte är kopplad till databasen. 
" Each parameter in the deserialization constructor on type 'backend.MemberDto' must bind to an object property or field on deserialization"