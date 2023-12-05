const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];

//console.log('config >', config);



const db = {};
//시퀄라이즈 객체 선언시 매개변수로 다음 정보들을 받음
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./User')(sequelize, Sequelize);


module.exports = db;

