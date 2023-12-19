import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
// import routes
import users from "./routes/users.routes.js";
import blogs from "./routes/blogs.routes.js";
import works from "./routes/works.routes.js";
import comments from "./routes/comments.routes.js";
// import db
import { db } from "./configs/db.js";

// Importar rutas y configuraciones
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// connect to db
db();
// environment variables config
dotenv.config();
// express config
const app = express();
// config json
app.use(express.json());
// config cors
const whiteList = [process.env.FRONTEND_URL, undefined];
const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));
// routes
app.use("/api/users", users);
app.use("/api/blogs", blogs);
app.use("/api/works", works);
app.use("/api/comments", comments);
app.use("/images", express.static(path.join(__dirname, "public/images")));
// define port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`------ Server started on port ${PORT}`));
