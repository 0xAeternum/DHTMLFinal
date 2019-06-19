let config = {};

/**
 * Application information
 */
config.APP_NAME = 'DHTMLFinal'

/**
 * Database information
 */
config.database = 'mysql';
config.databaseHostname = '127.0.0.1';
config.databaseUsername = 'admin';
config.databasePassword = 'admin';
config.databaseModes = {
  development: 'development',
  test: 'test',
  staging: 'staging',
  currentMode: 'development'
};
config.databaseName = 'dhtmlfinalresit';

config.locales = ['en', 'nl', 'de'];

module.exports = config;
