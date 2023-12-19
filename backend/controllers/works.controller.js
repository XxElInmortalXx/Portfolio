import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs";

import { Works } from "../models/works.model.js";
import { Users } from "../models/users.model.js";
// import { helperImg } from "../utils/helperFiles.js";
import { validationWork } from "../validations/works.validations.js";

// Importar rutas y configuraciones
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createWork = async (req, res) => {
  try {
    const validated = validationWork(req.body);
    if (validated !== "validated") {
      throw new Error(validated);
    }
    // validar imagen
    if (!req.file) {
      throw new Error("Image is required");
    }
    // crear URL de la imagen
    const image_url = `${process.env.BACKEND_URL}${
      process.env.PORT || 4000
    }/images/${req.file.filename}`;
    // traer user_id
    const user = await Users.findOne({
      where: { user_id: req.headers.authorization.id },
    });
    const work = await Works.create({
      ...req.body,
      image_url,
      user_id: user.dataValues.user_id,
    });
    res.status(200).json({ msg: "Work created", work });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateWork = async (req, res) => {
  try {
    const work = await Works.findOne({ where: { work_id: req.params.id } });
    if (!work) {
      throw new Error("Work not found");
    }
    // validar imagen
    if (!req.file) {
      throw new Error("Image is required");
    }
    // borrar imagen
    const image_url = work.dataValues.image_url;
    const image_name = image_url.split("/images/")[1];
    const imageToDeletePath = path.join(
      __dirname,
      "..",
      "public",
      "images",
      image_name
    );
    fs.unlinkSync(imageToDeletePath);
    // crear URL de la imagen
    const image_url_new = `${process.env.BACKEND_URL}${
      process.env.PORT || 4000
    }/images/${req.file.filename}`;
    // traer user_id
    const user = await Users.findOne({
      where: { user_id: req.headers.authorization.id },
    });
    // actualizar registro
    const newWork = await Works.update(
      {
        ...req.body,
        image_url: image_url_new,
        user_id: user.dataValues.user_id,
      },
      { where: { work_id: req.params.id } }
    );
    // mensaje de exito
    res.status(200).json({ msg: "Work updated", work: newWork.dataValues });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteWork = async (req, res) => {
  try {
    const work = await Works.findOne({ where: { work_id: req.params.id } });
    if (!work) {
      throw new Error("Work not found");
    }
    // borrar imagen
    const image_url = work.dataValues.image_url;
    const image_name = image_url.split("/images/")[1];
    const imageToDeletePath = path.join(
      __dirname,
      "..",
      "public",
      "images",
      image_name
    );
    fs.unlinkSync(imageToDeletePath);
    // borrar registro
    await Works.destroy({ where: { work_id: req.params.id } });
    // mensaje de exito
    res.status(200).json({ msg: "Work deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWork = async (req, res) => {
  try {
    const work = await Works.findOne({ where: { work_id: req.params.id } });
    res.status(200).json({ work: work.dataValues });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWorks = async (req, res) => {
  try {
    const works = await Works.findAll();
    res.status(200).json({ works });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createWork, updateWork, deleteWork, getWork, getWorks };
