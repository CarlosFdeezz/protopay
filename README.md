# Fintrix

**Fintrix** is a full-stack personal finance management application designed to bridge the gap between robust backend logic and modern, responsive frontend interactivity.

This project serves as a **capstone implementation** of clean architecture principles, demonstrating an end-to-end development workflow—from database schema design in SQLite to a component-based UI in React.

![React](https://img.shields.io/badge/Frontend-React-blue?style=flat-square)
![Express](https://img.shields.io/badge/Backend-Express-green?style=flat-square)
![SQLite](https://img.shields.io/badge/Database-SQLite-lightgrey?style=flat-square)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)
![Workflow](https://img.shields.io/badge/Workflow-AI_Augmented-blueviolet?style=flat-square)

---

## 🎯 Engineering Goals

Instead of a simple "Hello World," Fintrix was engineered to establish a baseline for scalable web applications:

- **Architectural Rigor:** Implementation of a layered architecture (separation of concerns between UI, Business Logic, and Data Persistence).
- **Modern Standards:** Utilization of functional components, hooks, and strict linting/formatting (ESLint/Prettier) to ensure code quality.
- **Production-Grade Workflow:** Simulating a real-world environment with version control strategies, documentation, and continuous iterative refinement.

## 🤖 AI-Augmented Workflow

This project leverages Artificial Intelligence as a **governed force multiplier**, not a replacement for engineering judgment.

- **Role of AI:** Accelerated boilerplate generation, documentation drafting, and rapid prototyping of UI layouts.
- **Human Oversight:** All architectural decisions, logic verification, and code reviews were performed manually to ensure security and efficiency.
- **Outcome:** This workflow demonstrates how modern engineers can use AI tools to reduce friction and focus on high-level problem solving.

## ⚡ Key Features

- **Responsive UI:** Built with **React + Vite** and styled with **Tailwind CSS** for a mobile-first experience.
- **RESTful API:** A robust **Express** backend handling CRUD operations with validated endpoints.
- **Persistence:** Lightweight yet powerful data management using **SQLite**, optimized for local development and portability.
- **Scalable Structure:** Modular file organization (`/components`, `/pages`, `/routes`, `/controllers`) facilitating future feature expansion.
## 🏗️ Architecture Overview

The system follows a classic client-server model, ensuring a clear **separation of concerns** between the presentation (React) and the business/persistence layers (Express/SQLite).

```tree
root/
├── frontend/                     # React Single Page Application (Vite)
│   ├── src/components/           # Reusable UI atoms and molecules
│   ├── src/pages/                # View logic, handles state and routing
│   └── src/services/             # API integration layer (interacts with the backend)
├── backend/                      # Express API
│   ├── routes/                   # Endpoint definitions and request handling
│   ├── controllers/              # Business logic (processes requests)
│   └── db/                       # Database connection, schema, and setup (SQLite)
└── LICENSE                       # MIT License file
```

## ✨ Prerequisites

Before getting started, ensure you have the following installed:

* **Node.js 20 or higher.**
* **npm 10 or higher.**

> 💡 **Note:** Each package (`frontend` and `backend`) acts as a separate logical unit. Installation must be run within both directories.

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/CarlosFdeezz/fintrix.git](https://github.com/CarlosFdeezz/fintrix.git)
    cd fintrix
    ```

2.  **Install dependencies**
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3.  **Start the API** (port 3001 by default)
    ```bash
    cd backend
    node index.js
    ```

4.  **Run the frontend in development mode** (port 5173 by default)
    ```bash
    cd frontend
    npm run dev
    ```

5.  **Open the browser at** `http://localhost:5173` and start exploring Fintrix.

## 🔧 Useful Scripts

### Backend
* `node index.js`: starts the Express server and creates the database if it does not exist.

### Frontend
* `npm run dev`: development server with hot reload.
* `npm run build`: generates the optimized production build.
* `npm run preview`: previews the local production build.
* `npm run lint`: runs ESLint over `.js` and `.jsx` files.
* `npm run test`: runs the Vitest test suite.

## 🗺️ Suggested Roadmap

This is a living project. Future iterations will focus on scaling functionality and improving the developer experience:

* [ ] Design a basic authentication system (e.g., JWT).
* [ ] Integrate visualizations (charts and reports) based on recorded expenses.
* [ ] Add advanced filters and data export (e.g., CSV/JSON).
* [ ] Prepare deployment scripts (e.g., Docker / managed services).
* [ ] Document technical decisions and lessons learned in every release.

## 🤝 Contributing

Pull requests are welcome for educational discussions. Please open an issue to propose significant changes.

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

<div align="center">
  <sub>This project reflects my commitment to learning by building. Designed & Developed by <a href="https://github.com/CarlosFdeezz">Carlos Fernández Cabeza</a></sub>
</div>
