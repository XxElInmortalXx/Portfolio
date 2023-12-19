import { Blogs } from "../models/blogs.model.js";
import { validationBlog } from "../validations/blogs.validation.js";
import { Users } from "../models/users.model.js";

const createBlog = async (req, res) => {
  try {
    const { title, subtitle, content } = req.body;
    // validar req.body
    const validated = validationBlog(req.body);
    if (validated !== "validated") {
      throw new Error(validated);
    }
    // agregar user_id
    const user = await Users.findOne({
      where: { user_id: req.headers.authorization.id },
    });
    const blog = await Blogs.create({
      title,
      subtitle,
      content,
      user_id: user.dataValues.user_id,
    });
    res.status(200).json({ msg: "Blog created", blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { title, subtitle, content } = req.body;
    // validar req.body
    const validated = validationBlog(req.body);
    if (validated !== "validated") {
      throw new Error(validated);
    }
    const blog = await Blogs.update(
      { title, subtitle, content },
      { where: { blog_id: req.params.id } }
    );
    res.status(200).json({ msg: "Blog updated", blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    await Blogs.destroy({ where: { blog_id: req.params.id } });
    res.status(200).json({ msg: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBlog = async (req, res) => {
  try {
    const blog = await Blogs.findOne({ where: { blog_id: req.params.id } });
    res.status(200).json({ blog: blog.dataValues });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.findAll();
    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createBlog, updateBlog, deleteBlog, getBlog, getBlogs };
