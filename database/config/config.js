require('dotenv').config()

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL || 'postgres://tyqlebwhrrbtbg:ad3190a04aee8be30b0f78d334a2def94f617b5c2b35cedb49cb24c63a5834d3@ec2-35-174-88-65.compute-1.amazonaws.com:5432/d5ufji4hd781d2',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true
    }
  },
  test: {
    url: process.env.TEST_DATABASE_URL || 'postgres://tyqlebwhrrbtbg:ad3190a04aee8be30b0f78d334a2def94f617b5c2b35cedb49cb24c63a5834d3@ec2-35-174-88-65.compute-1.amazonaws.com:5432/d5ufji4hd781d2',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true
    }
  },
  production: {
    url: process.env.DATABASE_URL || 'postgres://tyqlebwhrrbtbg:ad3190a04aee8be30b0f78d334a2def94f617b5c2b35cedb49cb24c63a5834d3@ec2-35-174-88-65.compute-1.amazonaws.com:5432/d5ufji4hd781d2',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true
    }
  },
}