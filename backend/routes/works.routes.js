import express from "express";
import {
  createWork,
  deleteWork,
  getWork,
  getWorks,
  updateWork,
} from "../controllers/works.controller.js";
import { verifyJWT } from "../middlewares/verifyAuth.middleware.js";
import { uploadMulter } from '../utils/uploadFiles.js'

const router = express.Router();

router.route("/create-work").post(verifyJWT, uploadMulter, createWork);
router.route("/update-work/:id").patch(verifyJWT, uploadMulter, updateWork);
router.route("/delete-work/:id").delete(verifyJWT, deleteWork);
router.route("/get-work/:id").get(getWork);
router.route("/get-works").get(getWorks);

export default router;
