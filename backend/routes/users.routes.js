import express from "express";
import {
  authConfirmUser,
  authForgotPassword,
  authLoginUser,
  authRegisterUser,
  authResetPassword,
  deleteUser,
  getUser,
  getUsers,
  sendEmail,
} from "../controllers/users.controllers.js";
import { verifyJWT } from '../middlewares/verifyAuth.middleware.js'

const router = express.Router();

router.route("/auth/register").post(authRegisterUser);
router.route("/auth/confirm-user/:token").get(authConfirmUser);
router.route("/auth/login").post(authLoginUser);
router.route("/auth/forgot-password").post(authForgotPassword);
router.route("/auth/reset-password/:token").post(authResetPassword);

router.route("/send-email").post(sendEmail);

router.route('/get-user').get(verifyJWT, getUser)
router.route('/get-users').get(verifyJWT, getUsers)
router.route('/delete-user/:id').delete(verifyJWT, deleteUser)

export default router;
