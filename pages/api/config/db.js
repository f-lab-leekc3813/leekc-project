import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('leekc', 'root', 'mysql', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;