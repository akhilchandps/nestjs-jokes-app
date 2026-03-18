# 🎭 Joke API

A REST API for submitting, retrieving, updating, and deleting jokes — built with **NestJS**, **TypeORM**, and **PostgreSQL**.

---

## ✨ Features

- Submit a new joke
- Retrieve jokes by email
- Retrieve a random joke
- Update a joke
- Delete a joke
- Input validation (using `class-validator`)
- Proper error handling (`NotFoundException` for missing jokes)

---

## 📦 Tech Stack

- **Framework:** NestJS
- **Database:** PostgreSQL + TypeORM
- **Validation:** class-validator
- **Docs:** Swagger UI → `http://localhost:3000/api#/`

---

## 🚀 Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd joke-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create the `.env` file

```bash
cp .env.example .env
```

Fill in your values:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_NAME=jokes_db
PORT=3000
NODE_ENV=development
```

### 4. Create the database

```sql
CREATE DATABASE jokes_db;
```

### 5. Run the app

```bash
# Development mode (hot reload)
npm run start:dev

# OR production mode
npm run build
npm run start:prod
```

Swagger docs available at: **http://localhost:3000/api#/**

---

## 🌍 Environment Variables

| Variable | Description | Example |
|---|---|---|
| `DB_HOST` | Database host | `localhost` |
| `DB_PORT` | Database port | `5432` |
| `DB_USERNAME` | Database username | `postgres` |
| `DB_PASSWORD` | Database password | `yourpassword` |
| `DB_NAME` | Database name | `jokes_db` |
| `PORT` | App port | `3000` |
| `NODE_ENV` | Environment | `development` |

---

## 📌 API Endpoints

### `POST /jokes/submit`
Submit a new joke.

**Request body:**
```json
{
  "title": "Why did the chicken cross the road?",
  "content": "To get to the other side!😂",
  "email": "amal@gmail.com"
}
```

**Response `201`:**
```json
{
  "id": 3,
  "title": "Why did the chicken cross the road?",
  "content": "To get to the other side!😂",
  "email": "amal@gmail.com"
}
```

---

### `GET /jokes/email?email=amal@gmail.com`
Get all jokes submitted by a specific email.

**Query param:** `email` *(required)*

**Response `200`:**
```json
[
  {
    "id": 3,
    "title": "Why did the chicken cross the road?",
    "content": "To get to the other side!😂",
    "email": "amal@gmail.com"
  }
]
```

**Response `404`:**
```json
{
  "statusCode": 404,
  "message": "No jokes found for email: amal@gmail.com",
  "error": "Not Found"
}
```

---

### `GET /jokes/random`
Fetch a random joke from the database.

**Response `200`:**
```json
{
  "id": 3,
  "title": "Why did the chicken cross the road?",
  "content": "To get to the other side!😂",
  "email": "amal@gmail.com"
}
```

**Response `404`:**
```json
{
  "statusCode": 404,
  "message": "No jokes available in the database",
  "error": "Not Found"
}
```

---

### `PUT /jokes/:id`
Update an existing joke by its ID.

**URL param:** `id` *(required)*

**Request body** *(all fields optional)*:
```json
{
  "title": "Why did the math book look sad?",
  "content": "Because it had too many problems!"
}
```

**Response `200`:**
```json
{
  "id": 3,
  "title": "Why did the math book look sad?",
  "content": "Because it had too many problems!",
  "email": "amal@gmail.com"
}
```

**Response `404`:**
```json
{
  "statusCode": 404,
  "message": "Joke not found",
  "error": "Not Found"
}
```

---

### `DELETE /jokes/:id`
Delete a joke by its ID.

**URL param:** `id` *(required)*

**Response `200`:**
```json
{
  "message": "Deleted successfully"
}
```

**Response `404`:**
```json
{
  "statusCode": 404,
  "message": "Joke not found",
  "error": "Not Found"
}
```

---

## ✅ Validation

All inputs are validated using `class-validator`. Required fields and email format are enforced.

**Example `400` error:**
```json
{
  "statusCode": 400,
  "message": [
    "email must be an email",
    "content should not be empty"
  ],
  "error": "Bad Request"
}
```

| Field | Rule |
|---|---|
| `title` | Required, max 255 characters |
| `content` | Required, min 5 characters |
| `email` | Required, valid email format |
| `category` | Optional, max 100 characters |

---

## 📖 Swagger UI

Once the app is running, open your browser and go to:

```
http://localhost:3000/api#/
```

---

## 🗂 Project Structure

```
src/
├── jokes/
│   ├── dto/
│   │   ├── create-joke.dto.ts
│   │   └── update-joke.dto.ts
│   ├── joke.entity.ts
│   ├── jokes.controller.ts
│   ├── jokes.service.ts
│   └── jokes.module.ts
├── app.module.ts
└── main.ts
```
