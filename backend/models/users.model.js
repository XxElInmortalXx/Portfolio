import { Model, DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "../configs/db.config.js";

class Users extends Model {}

Users.init(
  {
    user_id: {
      type: DataTypes.CHAR(60),
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    first_name: {
      type: DataTypes.CHAR(24),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.CHAR(24),
      allowNull: false,
    },
    email: {
      type: DataTypes.CHAR(60),
      allowNull: false,
    },
    password: {
      type: DataTypes.CHAR(60),
      allowNull: false,
    },
    token: {
      type: DataTypes.CHAR(60),
      defaultValue: UUIDV4,
      allowNull: true,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Users",
  }
);

export { Users };
