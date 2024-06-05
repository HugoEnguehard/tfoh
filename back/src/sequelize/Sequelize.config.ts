const sequelizeConfig = {
  development: {
    database: 'tfoh',
    username: 'root',
    password: 'root_password',
    host: 'localhost',
    // host: 'db', // For deployment !
    dialect: 'mysql',
    port: 3306,
  },
  production: {
    // Configuration pour la production
  },
};

export default sequelizeConfig;