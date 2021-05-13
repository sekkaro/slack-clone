import Sequelize from "sequelize";
import applyExtraSetup from "./extra-setup";

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);

const modelDefiners = [
  require("./user").default,
  require("./channel").default,
  require("./message").default,
  require("./team").default,
  // Add more models here...
  // require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
export default sequelize;
