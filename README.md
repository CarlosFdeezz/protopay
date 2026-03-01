# ProtoPay (Legacy Prototype)

**ProtoPay** is an archived full-stack technical sandbox designed to explore the integration between a modern frontend and a structured RESTful backend. It represents my foundational journey into full-stack development, prioritizing architectural rigor over feature completion.

> [!IMPORTANT]
> **Project Status:** This repository is a **technical artifact** and is currently discontinued. It serves as a portfolio piece to demonstrate my early adoption of clean architecture, modular component design, and professional developer workflows.

![React](https://img.shields.io/badge/Frontend-React-blue?style=flat-square)
![Express](https://img.shields.io/badge/Backend-Express-green?style=flat-square)
![SQLite](https://img.shields.io/badge/Database-SQLite-lightgrey?style=flat-square)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)
![Status](https://img.shields.io/badge/Status-Educational_Archive-orange?style=flat-square)

---

## 💡 The "Why" Behind This Project

Instead of building a simple "Hello World," I engineered this project to establish a baseline for scalable web applications. My goal was to move beyond tutorials and implement industry standards from day one:

- **Architectural Rigor:** Implementation of a layered architecture (separation of concerns between UI, Business Logic, and Data Persistence).
- **Modern Standards:** Utilization of functional components, hooks, and strict linting (ESLint/Prettier) to ensure code quality.
- **Engineering Mindset:** Transitioning from "just writing code" to designing systems with version control strategies and iterative refinement.

## 🏗️ Architecture & Technical Specs

The project is split into two distinct ecosystems. While the integration bridge between them remains a work-in-progress, each "island" follows professional structural standards.

```tree
root/
├── frontend/                 # React Single Page Application (Vite)
│   ├── src/components/       # Reusable UI atoms and molecules
│   ├── src/pages/            # View logic and routing
│   └── src/services/         # API integration layer (Conceptual)
├── backend/                  # Express API
│   ├── routes/               # Endpoint definitions
│   ├── controllers/          # Business logic and request processing
│   └── db/                   # SQLite schema and setup
└── LICENSE                   # MIT License
```

### 🔹 Frontend (React + Vite + Tailwind)

* **State Management:** Initialized with React Hooks to handle local UI state and component lifecycle efficiently.
* **Atomic Design:** Organized into reusable components (atoms/molecules) to facilitate UI consistency and future expansion.
* **Styling:** Utility-first CSS via **Tailwind**, ensuring a fully responsive, mobile-first experience with minimal custom CSS overhead.

### 🔹 Backend (Node.js + Express + SQLite)

* **Database:** Structured **SQLite** schema for lightweight, serverless, and portable data management.
* **Routing:** Modular route definitions for `Transactions` and `Categories`, following RESTful conventions.
* **Validation:** Implementation of controller-level logic to handle CRUD operations and basic error responses.

---

## 🤖 AI-Augmented Workflow

This project leveraged Artificial Intelligence as a **governed force multiplier**, not a replacement for engineering judgment.

* **Role of AI:** Accelerated boilerplate generation, documentation drafting, and rapid prototyping of UI layouts.
* **Human Oversight:** All architectural decisions, logic verification, and code reviews were performed manually to ensure security and efficiency.
* **Outcome:** This workflow demonstrates my ability to use modern AI tools to reduce friction and focus on high-level problem solving.

---

## 🚀 How to Explore

Since this is a prototype, you can explore the codebases separately to review the structure and code quality:

1. **Clone the repository**
```bash
git clone https://github.com/CarlosFdeezz/protopay.git
cd protopay
```


2. **Explore the UI**
```bash
cd frontend
npm install
npm run dev
```


3. **Explore the API Logic**
```bash
cd backend
npm install
node index.js
```

---

## 🗺️ Archive Notes

This project is no longer actively maintained. It stands as a milestone of my transition into Full-Stack engineering, showcasing my ability to architect complex systems and my commitment to continuous learning through building.

<div align="center">
<sub>Designed & Developed by <a href="[https://github.com/CarlosFdeezz](https://github.com/CarlosFdeezz)">Carlos Fernández Cabeza</a></sub>
</div>
