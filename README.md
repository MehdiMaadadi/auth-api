
# Auth-API

**Short description**  
Simple authentication API using Node.js, Express, bcrypt and JWT. Demonstrates signup, login and protected routes.

**Tech stack**
- Node.js (Express)
- bcrypt (password hashing)
- jsonwebtoken (JWT)
- In-memory user store for demo (can be replaced with a DB)
- GitHub Actions (CI) — optional

## Endpoints
- `POST /signup` — create user `{ "email": "...", "password": "..." }`
- `POST /login` — login `{ "email": "...", "password": "..." }` → returns `{ token }`
- `GET /me` — protected, requires `Authorization: Bearer <token>`

## Run locally (demo)
1. Clone:
   ```bash
   git clone https://github.com/mehdimaadadi/auth-api.git
   cd auth-api
