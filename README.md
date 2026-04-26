# ProtoPay

Full-stack prototype built to learn clean architecture hands-on.
Not production software — an exercise in structure.

![React](https://img.shields.io/badge/Frontend-React-blue?style=flat-square)
![Express](https://img.shields.io/badge/Backend-Express-green?style=flat-square)
![SQLite](https://img.shields.io/badge/Database-SQLite-lightgrey?style=flat-square)


---

## What it is

A payment dashboard with a React/Vite frontend and an Express/SQLite backend, connected through a RESTful API. The goal wasn't to ship a product but to practice separating concerns properly from the start.

## Architecture

```
frontend/
├── components/   # Reusable UI components
├── pages/        # Views and routing
└── services/     # API calls

backend/
├── controllers/  # Business logic
├── routes/       # Endpoint definitions
└── middleware/   # Validation
```

## Stack

Frontend: React, Vite, Tailwind CSS  
Backend: Node.js, Express, SQLite  
Tooling: ESLint, Prettier, Vitest

## Run it

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
npm install
node index.js
```

---

Archived. No longer maintained.
