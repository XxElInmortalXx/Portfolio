import { Model, DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "../configs/db.config.js";

class Works extends Model {}

Works.init(
  {
    work_id: {
      type: DataTypes.CHAR(60),
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    image_url: {
      type: DataTypes.CHAR(200),
      allowNull: false,
    },
    title: {
      type: DataTypes.CHAR(24),
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.CHAR(24),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.CHAR(60),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Works",
  }
);

export { Works };
