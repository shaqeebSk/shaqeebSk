# MERN Todo Application

A complete Todo application built with the **MERN stack**:
- **MongoDB** for database
- **Express.js + Node.js** for REST API backend
- **React** for frontend UI

## Project Structure

```
.
├── client/         # React app
├── server/         # Express + MongoDB API
└── package.json    # Root scripts
```

## Features

- Create todos
- List todos
- Mark todo as completed/incomplete
- Delete todos
- Simple and clean UI

## Prerequisites

- Node.js (v18+ recommended)
- MongoDB running locally or remote connection string

## Setup & Run

1. Install root dependency:
   ```bash
   npm install
   ```

2. Install client and server dependencies:
   ```bash
   npm run install-all
   ```

3. Configure backend env:
   ```bash
   cp server/.env.example server/.env
   ```
   Update `MONGO_URI` in `server/.env` if needed.

4. Optional frontend env:
   ```bash
   cp client/.env.example client/.env
   ```

5. Run both frontend and backend:
   ```bash
   npm run dev
   ```

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## API Endpoints

- `GET /api/health`
- `GET /api/todos`
- `POST /api/todos`
- `PATCH /api/todos/:id`
- `DELETE /api/todos/:id`

## Notes

If you don't have MongoDB locally, use MongoDB Atlas and place its URI in `server/.env`.
