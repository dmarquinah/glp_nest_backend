# Backend Store System

## Description

The backend infraestructure for the Store System created with Nest.js.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Migrations

This project uses migrations with TypeORM so it can keep track of database changes.

### Show migrations

```bash
npm run migrations:show
```

### Create a new migration
Replace `<insert_name>` with the name of the migration to be created.

```bash
npm run migrations:generate ./src/v1/modules/infrastructure/database/migrations/<insert_name>
```

### Execute migrations changes

```bash
npm run migrations:run
```

### Drop existing changes
Be careful with this command, it will remove the data and tables from the database, DON'T USE IT IN PROD

```bash
npm run migrations:drop
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```