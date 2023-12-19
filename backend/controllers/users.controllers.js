import bcrypt from "bcrypt";
import { Users } from "../models/users.model.js";
import {
  validationForgotPassword,
  validationLogin,
  validationRegister,
  validationResetPassword,
  validationSendEmail,
} from "../validations/users.validation.js";
import { createJWT } from "../utils/jsonwebtoken.js";
import { generateId } from "../utils/index.js";
import { sendEmailForgotPassword, sendEmailVerification } from "../emails/authEmail.js";
import { sendEmailContact } from "../emails/emailContact.js";

const authRegisterUser = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    // validar req.body
    const validated = validationRegister(req.body);
    if (validated !== "validated") {
      throw new Error(validated);
    }
    // validar que el email no exista
    const user = await Users.findOne({ where: { email } });
    if (user) {
      throw new Error("Email already exists");
    }
    // hashear password
    const hashedPassword = await bcrypt.hash(password, 10);
    // crear usuario
    const userCreated = await Users.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });
    // enviar email con token
    sendEmailVerification(
      userCreated.dataValues.email,
      userCreated.dataValues.token
    );
    // ver admin o no
    if (userCreated.dataValues.email === "alpiryk@gmail.com") {
      // hacerlo admin
      await Users.update(
        { admin: true },
        { where: { user_id: userCreated.dataValues.user_id } }
      );
      return res.status(200).json({
        msg: "registered, check your email",
        userCreated,
      });
    }
    // enviar mensaje de éxito
    res.status(200).json({
      msg: "registered, check your email",
      userCreated,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const authConfirmUser = async (req, res) => {
  try {
    const { token } = req.params;
    const user = await Users.findOne({ where: { token } });
    if (!user) {
      throw new Error("Token invalid");
    }
    await Users.update({ verified: true, token: null }, { where: { token } });
    res.status(200).json({ msg: "User confirmed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const authLoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validar req.body
    const validated = validationLogin(req.body);
    if (validated !== "validated") {
      throw new Error(validated);
    }
    // validar email existe
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      throw new Error("User not found");
    }
    // validar password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    // generar jwt
    const jwt = createJWT(user.dataValues.user_id);
    // verificar si está confirmado o no
    if (!user.dataValues.verified) {
      throw new Error("Please confirm your email, check your inbox");
    }
    // ver si es admin o no
    if (user.dataValues.email === "alpiryk@gmail.com") {
      // hacerlo admin
      await Users.update(
        { admin: true },
        { where: { user_id: user.dataValues.user_id } }
      );
      return res.status(200).json({ msg: "logged in", user, jwt, admin: true });
    }
    // enviar mensaje de exito con jwt
    res.status(200).json({ msg: "logged in", user, jwt, admin: false });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const authForgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    // validar req.body
    const validated = validationForgotPassword(req.body);
    if (validated !== "validated") {
      throw new Error(validated);
    }
    // validar email existe
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      throw new Error("User not found");
    }
    // generar token
    const token = generateId();
    // actualizar token
    await Users.update({ token }, { where: { email } });
    // enviar email con token
    sendEmailForgotPassword(email, token);
    // enviar mensaje de exito
    res
      .status(200)
      .json({ msg: `Instructions send to your email ${req.body.email}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const authResetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    // validar req.body
    const validated = validationResetPassword(req.body);
    if (validated !== "validated") {
      throw new Error(validated);
    }
    // validar token
    const user = await Users.findOne({ where: { token } });
    if (!user) {
      throw new Error("Token invalid");
    }
    // hashear password
    const hashedPassword = await bcrypt.hash(password, 10);
    // actualizar password
    await Users.update(
      { password: hashedPassword, token: null },
      { where: { token } }
    );
    // enviar mensaje de exito
    res.status(200).json({ msg: "password changed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({ where: { admin: false } });
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await Users.findOne({ where: { user_id: req.headers.authorization.id } });
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findOne({ where: { user_id: id } });
    if (!user) {
      throw new Error("User not found");
    }
    await Users.destroy({ where: { user_id: id } });
    res.status(200).json({ msg: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const sendEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const validated = validationSendEmail(req.body);
    if (validated !== "validated") {
      throw new Error(validated);
    }
    sendEmailContact(name, email, message);
    res.status(200).json({
      msg: "Thank you for your message, I will respond within an hour or the next day",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  authRegisterUser,
  authConfirmUser,
  authLoginUser,
  authForgotPassword,
  authResetPassword,
  getUsers,
  getUser,
  deleteUser,
  sendEmail,
};
