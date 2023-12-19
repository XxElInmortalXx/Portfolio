import { Model, DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "../configs/db.config.js";

class Comments extends Model {}

Comments.init(
  {
    comment_id: {
      type: DataTypes.CHAR(60),
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    content: {
      type: DataTypes.CHAR(60),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.CHAR(60),
      allowNull: false,
    },
    blog_id: {
      type: DataTypes.CHAR(60),
      allowNull: true,
      defaultValue: null
    },
    work_id: {
      type: DataTypes.CHAR(60),
      allowNull: true,
      defaultValue: null
    },
  },
  {
    sequelize,
    modelName: "Comments",
  }
);

export { Comments };
