import { sequelize } from "./db.config.js";
import { syncTables } from '../utils/syncTables.js'

const db = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({force: true});
    // sync database tables
    syncTables()
    // message success
    console.log("------ Database connected successfully");
  } catch (error) {
    console.error("------ Unable to connect to the database:", error);
  }
};

export { db };
