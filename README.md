# Todo App Backend

A simple Todo App Backend built using Node.js, Express.js, and PostgreSQL, following the Service-Repository pattern.

## Features
✅ CRUD Operations - Create, Read, Update, Delete Todos  
✅ Mark Todos as Completed  
✅ Partial Updates with PATCH  
✅ Delete All Todos functionality  
✅ Database Integration - PostgreSQL with pg  
✅ Service Layer Architecture for clean and maintainable code  
✅ Error Handling & Response Formatting  

## Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: PostgreSQL  
- **Database Client**: pg (node-postgres)  
- **Environment Variables**: dotenv  
- **CORS Support**: cors middleware  

## Project Structure

```
📦 todo-backend
├── 📂 config        # Database configuration
│   └── db.js        # PostgreSQL connection pool
├── 📂 controllers   # Request handling logic
│   └── todo.controller.js
├── 📂 models        # Database schemas
│   └── todos.sql    # SQL for todos table
├── 📂 routes        # API routes
│   └── todo.routes.js
├── 📂 services      # Business logic layer
│   └── todo.service.js
├── 📜 .env          # Environment variables
├── 📜 .gitignore    # Git ignore configuration
├── 📜 app.js        # Express application setup
├── 📜 package.json  # Project dependencies
├── 📜 package-lock.json
├── 📜 README.md     # Documentation
└── 📜 server.js     # Entry point
```

## Installation

### Clone the repository

```sh
git clone https://github.com/kashanaqeel/todo-backend.git
cd todo-backend
```

### Install dependencies

```sh
npm install
```

### Setup PostgreSQL Database

1. Create a PostgreSQL database named `todoapp`.
2. Run the SQL script in `models/todos.sql` to create the required table.

### Configure environment variables

Create a `.env` file in the root and add:

```sh
PORT=3000
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=todoapp
```

### Start the server

```sh
npm start
```

## API Endpoints

### Todos API

| Method | Endpoint                 | Description                  |
|--------|--------------------------|------------------------------|
| GET    | `/todos`                 | Get all todos                |
| POST   | `/todos`                 | Create a new todo            |
| PATCH  | `/todos/:id`             | Update an existing todo      |
| PATCH  | `/todos/:id`             | Mark a todo as completed     |
| DELETE | `/todos/:id`             | Delete a specific todo       |
| DELETE | `/todos`                 | Delete all todos             |

## Request/Response Examples

### Create Todo

#### Request
```json
POST /todos
{
  "title": "Complete project",
  "description": "Finish the todo app backend",
  "status": "pending"
}
```

#### Response
```json
{
  "data": {
    "id": 1,
    "title": "Complete project",
    "description": "Finish the todo app backend",
    "status": "pending",
    "created_at": "2025-02-25T10:30:00.000Z"
  },
  "msg": "Todo added",
  "success": true
}
```

### Get All Todos

#### Response
```json
{
  "data": [
    {
      "id": 1,
      "title": "Complete project",
      "description": "Finish the todo app backend",
      "status": "pending",
      "created_at": "2025-02-25T10:30:00.000Z"
    }
  ]
}
```

## Database Schema

The application uses a PostgreSQL database with the following schema:

```sql
CREATE TYPE todo_status AS ENUM ('pending', 'completed');

CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    status todo_status NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Environment Variables

```sh
PORT=3000          # Application port
DB_USER=postgres   # PostgreSQL username
DB_PASSWORD=secret # PostgreSQL password
DB_HOST=localhost  # PostgreSQL host
DB_PORT=5432       # PostgreSQL port
DB_DATABASE=todoapp # Database name
```

## Contribution

Contributions are welcome! Feel free to submit a pull request.
