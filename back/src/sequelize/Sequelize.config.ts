const sequelizeConfig = {
  development: {
    database: 'tfoh',
    username: 'root',
    password: 'root_password',
    // host: 'localhost',
    host: 'db', // For deployment !
    dialect: 'mysql',
    port: 3306,
  },
  production: {
    database: 'tfoh',
    username: 'root',
    password: 'root_password',
    host: 'db', // For deployment !
    dialect: 'mysql',
    port: 3306,
  },
}

export default sequelizeConfig;