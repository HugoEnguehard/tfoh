import sequelizeConfig from './Sequelize.config';
import { Sequelize } from 'sequelize';

const { database, username, password, host, dialect } = sequelizeConfig.development;
const uri = `${dialect}://${username}:${password}@${host}/${database}`;
const sequelize = new Sequelize(uri, {
  logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to TFOH Database has been established successfully.');
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;