const { Sequelize } = require('sequelize');

const db = new Sequelize('codegig', 'postgres', 'shreyas', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire:30000,
        idle:10000
    }
});

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
        process.exit(1);
    });


module.exports={db};