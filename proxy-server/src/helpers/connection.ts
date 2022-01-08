import { Sequelize, DataTypes as TypeData } from "sequelize";

const sequelizeInstance = new Sequelize(`postgres://tes:password@localhost:5432/development_db`, {
  logging: process.env.NODE_ENV === "test" ? false : true,
});

export default sequelizeInstance;
export const sequelize = sequelizeInstance;
export const DataTypes = TypeData;
