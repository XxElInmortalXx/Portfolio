import { Blogs } from "../models/blogs.model.js";
import { Comments } from "../models/comments.model.js";
import { Works } from "../models/works.model.js";
import { Users } from "../models/users.model.js";

export const syncTables = () => {
  Users.hasMany(Blogs, { foreignKey: "user_id" });
  Blogs.belongsTo(Users, { foreignKey: "user_id" });
  Users.hasMany(Works, { foreignKey: "user_id" });
  Works.belongsTo(Users, { foreignKey: "user_id" });
  Users.hasMany(Comments, { foreignKey: "user_id" });
  Comments.belongsTo(Users, { foreignKey: "user_id" });

  Blogs.hasMany(Comments, { foreignKey: "blog_id" });
  Comments.belongsTo(Blogs, { foreignKey: "blog_id" });
  Works.hasMany(Comments, { foreignKey: "work_id" });
  Comments.belongsTo(Works, { foreignKey: "work_id" });
};
