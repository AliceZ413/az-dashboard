import fs from "node:fs";
import path from "node:path";
import { Sequelize } from "sequelize";
import devConfig from "@/config/index";

const db = {};

const sequelize = new Sequelize(devConfig);

let list = fs.readdirSync(path.join(process.cwd(), '/src/models'));
console.log(list);

db.list = list;

export default db;
// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.js')[env];
// const db = {};

// /* Custom handler for reading current working directory */
// const models = process.cwd() + '/db/models/' || __dirname;

// /* fs.readdirSync(__dirname) */
// fs.readdirSync(models)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
//     );
//   })
//   .forEach(file => {
//     /* const model = sequelize["import"](path.join(__dirname, file)); */
//     const model = sequelize['import'](path.join(models, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

// import Sequelize, { DataTypes } from "sequelize";
// import path from "path";
// import fs from "node:fs";
// import config from "../config/index.js";
// import { modelRoot } from "../modules/paths.js";

// // 数据库操作实例
// const sequelize = new Sequelize(
//   config.db.database,
//   config.db.username,
//   config.db.password,
//   {
//     host: config.db.host,
//     port: config.db.port,
//     dialect: config.db.dialect,
//     pool: config.db.pool,
//     logging: config.debug ? console.log : false,
//   }
// );

// const output = {
//   sequelize: sequelize,
// };

// function firstUpperCase(str) {
//   return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
// }

// let fileList = fs.readdirSync(modelRoot);
// for (let i = 0; i < fileList.length; i++) {
//   let file = fileList[i];
//   if (file !== "index.js") {
//     let modelName = file
//       .split("-")
//       .map((str) => firstUpperCase(str))
//       .join("")
//       .replace(".js", "");
//     output[modelName] = (await import(`./${file}`)).init(sequelize, DataTypes);
//   }
// }

// output["sync"] = async () => {
//   console.log("start sync db");
//   await sequelize.sync({ alter: true });
// };

// export default output;
