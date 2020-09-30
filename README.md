# Team bubols API

## Stack

| Responsability     | What           |
| ------------------ | -------------- |
| JS Spec            | ES6            |
| Process Managament | PM2            |
| Code Standard      | ESLint         |
| Code Style         | Prettier       |
| Logs               | Winston/Loggly |
| DB                 | knex/Bookshelf |
| Cache              | Redis          |

| Middleware           | What         |
| -------------------- | ------------ |
| CORS                 | CORS         |
| Body Parsing         | Body Parser  |
| Http Body Validation | Joi          |
| Custom error Handler | errorHandler |

### Basic flux

router >> controller >> service >> model

### Installing and running the app with PM2

```sh
npm install
npm install -g pm2
npm start
```

### Installing and running the app in dev mode

```sh
npm install // to install dependencies
npm run dev // to run dev mode server
```

### Local cache

```sh
docker run -d -p 6379:6379 redis
```

### Utility scripts

```sh
npm run db:migrate-make // generate new db migration file
npm run db:migrate      // run latest db migration
npm run db:migrate-down // rollback db migration
npm run db:seed         // run db seed
npm run db:seed-make    // generate new seed file
```

![alt text](https://github.com/ivoneijr/saas-fit-api/blob/master/docs/db.png)
