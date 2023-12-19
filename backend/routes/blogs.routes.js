import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from "../controllers/blogs.controller.js";
import { verifyJWT } from '../middlewares/verifyAuth.middleware.js';

const router = express.Router();

router.route("/create-blog").post(verifyJWT, createBlog);
router.route("/update-blog/:id").patch(verifyJWT, updateBlog);
router.route("/delete-blog/:id").delete(verifyJWT, deleteBlog);
router.route("/get-blog/:id").get(getBlog);
router.route("/get-blogs").get(getBlogs);

export default router;
