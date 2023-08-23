import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('leekc', 'root', '1023ldde', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;