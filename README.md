# nestjs-jokes-app# Joke API

A simple **NestJS** REST API for creating, retrieving, updating, and deleting jokes. The API supports querying jokes by email, retrieving a random joke, and includes input validation with `class-validator`. Emojis are fully supported in the joke content.

---

## Features

- Submit a new joke
- Retrieve jokes by email
- Retrieve a random joke
- Update an existing joke
- Delete a joke
- Input validation (`class-validator`)
- Proper error handling (`NotFoundException`)
- Swagger API documentation

---

## Technologies Used

- **NestJS** – Node.js framework
- **TypeORM** – ORM for PostgreSQL
- **PostgreSQL** – Relational database
- **class-validator** – Validation for DTOs
- **Swagger** – API documentation

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone <your-github-repo-url>
cd <your-repo-folder>
