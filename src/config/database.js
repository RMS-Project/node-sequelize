module.exports = {
  "development": {
    "username": "postgres",
    "password": null,
    "database": "sistema",
    "host": "localhost",
    "port": 5432,
    "dialect": "postgresql"
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "sistema",
    "host": "localhost",
    "port": 5432,
    "dialect": "postgresql"
  },
  "production": {
    "username": "postgres",
    "password": null,
    "database": "sistema",
    "host": "localhost",
    "port": 5432,
    "dialect": "postgresql"
  }
}


/*module.export = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'sistema',
  define: {
    timestamps: true,
    undercored: true,
    undercoredAll: true,
  }
}*/

/*const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistema', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432
});

module.exports = sequelize;*/