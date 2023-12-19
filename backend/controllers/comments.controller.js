import { Comments } from "../models/comments.model.js";
import { Users } from '../models/users.model.js'
import { validationComment } from "../validations/comments.validation.js";

const getBlogIdComments = async (req, res) => {
  try {
    const comments = await Comments.findAll({ 
        where: { blog_id: req.params.id },
        include: {
          model: Users
        }
    });
    res.status(200).json({ comments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWorkIdComments = async (req, res) => {
  try {
    const comments = await Comments.findAll({ 
        where: { work_id: req.params.id },
        include: {
          model: Users
        }
    });
    res.status(200).json({ comments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCommentBlog = async (req, res) => {
  try {
    const { content } = req.body;
    const validated = validationComment(req.body);
    if (validated !== "validated") {
      throw new Error(validated);
    }
    const { id } = req.headers.authorization;
    const user = await Users.findOne({ where: { user_id: id } })
    const newComment = await Comments.create({
      content,
      user_id: user.dataValues.user_id,
      blog_id: req.params.id,
    });
    res.status(200).json({ msg: "Comment created", newComment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCommentWork = async (req, res) => {
  try {
    const { content } = req.body;
    const validated = validationComment(req.body);
    if (validated !== "validated") {
      throw new Error(validated);
    }
    const { id } = req.headers.authorization;
    const user = await Users.findOne({ where: { user_id: id } })
    const newComment = await Comments.create({
      content,
      user_id: user.dataValues.user_id,
      work_id: req.params.id,
    });
    res.status(200).json({ msg: "Comment created", newComment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comments.findOne({ where: { comment_id: id } });
    if (!comment) {
      throw new Error("Comment not found");
    }
    await Comments.destroy({ where: { comment_id: id } });
    res.status(200).json({ msg: "Comment deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createCommentBlog, createCommentWork, getWorkIdComments, getBlogIdComments, deleteComment };
