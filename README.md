# eCapital Assignment

This is a full stack web app for eCapital's take home assignment.

## Requirements

- node (18.4.0)
- npm (8.12.1)

## Installation and Usage

1. Install dependencies in root, frontend, and backend directories.

```bash
npm install
```

2.  Setup the following environment variables in .env files for frontend and backend directories.

```bash
# /client
# REACT_APP_BACKEND_ORIGIN=FOO

# /server
# FRONTEND_ORIGIN=BAZ
# PORT=BAR
# DATABASE_URL=QUX
# POSTGRES_USER=QUUX
# POSTGRES_PASSWORD=QUUZ
```

3. Setup Postgres volume and Prisma in server directory.

```bash
docker compose up -d
npx prisma init
npx prisma migrate dev
npx prisma db seed
```

4. Serve client and server from respective directories.

```bash
# /client
npm run start

# /server
npm run start
```
