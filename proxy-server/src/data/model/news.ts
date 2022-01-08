import { sequelize, DataTypes } from "../../helpers/connection";

export default sequelize.define(
  "news",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    img_url: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: "no title",
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
  },
  {
    tableName: "news",
    timestamps: true,
    freezeTableName: true,
  }
);
