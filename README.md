# Task Manager API

## Description
The **Task Manager API** is a backend application built with NestJS and TypeScript. It provides endpoints to manage tasks and categories, supporting basic CRUD operations. The application uses in-memory storage, making it lightweight and ideal for learning or showcasing backend development skills.

----

## Features

<!-- ### Task Management
- Create tasks with a description, category, and status (pending or completed).
- Retrieve a list of tasks, with optional filtering by category or status.
- Update task details such as description, category, or status.
- Delete tasks. -->

### Category Management
- Create categories to organize tasks.
- Retrieve all categories.
- Update category names.
- Delete categories.

### Technology Stack
- **Backend Framework:** [NestJS](https://nestjs.com/)
- **Language:** TypeScript

----

## Installation

### Prerequisites
- Node.js (v16 or later recommended)
- npm or yarn package manager

### Steps
1. Clone the repository:
  ```bash
  git clone https://github.com/berrielucas/task-manager-api.git
  cd task-manager-api
  ```
2. Install dependencies:
  ```bash
  npm install
  # or
  yarn install
  ```
3. Start the development server:
  ```bash
  npm run start:dev
  # or
  yarn start:dev
  ```
4. Access the API at `http://localhost:3000`.

----

## Endpoints

<!-- ### Task Endpoints
- POST /tasks: Create a new task.
- GET /tasks: Retrieve all tasks (filterable by category or status).
- PATCH /tasks/:id: Update a task.
- DELETE /tasks/:id: Delete a task. -->

### Category Endpoints
- POST /categories: Create a new category.
- GET /categories: Retrieve all categories.
- PATCH /categories/:id: Update a category.
- DELETE /categories/:id: Delete a category.