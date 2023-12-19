import express from "express";
import {
  createCommentBlog,
  createCommentWork,
  deleteComment,
  getBlogIdComments,
  getWorkIdComments,
} from "../controllers/comments.controller.js";
import { verifyJWT } from "../middlewares/verifyAuth.middleware.js";

const router = express.Router();

router.route("/get-blog-comments/:id").get(getBlogIdComments);
router.route("/get-work-comments/:id").get(getWorkIdComments);
router.route("/create-comment-blog/:id").post(verifyJWT, createCommentBlog);
router.route("/create-comment-work/:id").post(verifyJWT, createCommentWork);
router.route("/delete-comment/:id").delete(verifyJWT, deleteComment);

export default router;
