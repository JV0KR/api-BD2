require("dotenv").config();
const app = require("./config/app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 4001;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
