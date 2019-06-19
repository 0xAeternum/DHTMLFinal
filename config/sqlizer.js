const config = require(__dirname + '/config.js')
const Sequelize = require('sequelize');
const sqlizer = new Sequelize(config.database + '://' + config.databaseUsername + ':' + config.databasePassword + '@' + config.databaseHostname + '/' + config.databaseName)

const Users = sqlizer.define('users', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  class: {
    type: Sequelize.ENUM(['Warlock', 'Warrior', 'Mage', 'Shooter']),
  },
  level: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  pvpwon: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  pvplost: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  exp: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  strength: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  intellect: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  agility: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  completedLevels: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

sqlizer
  .authenticate()
  .then(async () => {
    console.log('Connection has been established successfully.');
    await Users.sync({force: true}) // synchronize table structure in database
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const MODELS = {
  Users: Users
}

module.exports.MODELS = () => { return MODELS; }