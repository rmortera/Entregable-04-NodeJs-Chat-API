const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const userRoutes = require("./routes/users.routes");
const conversationsRoutes = require("./routes/conversations.routes");
const authRoutes = require("./routes/auth.routes");
const messagesRoutes = require("./routes/messages.routes");
const participantsRoutes = require("./routes/participants.routes");
const errorHandlerRouter = require("./routes/errorHandler.routes");
const initModels = require("./models/initModels");

initModels();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = 8000;

db.authenticate()
  .then(() => {
    console.log("Database connection succesful");
  })
  .catch((error) => console.log(error));

db.sync({ alter: true })
  .then(() => console.log("Synchronized database"))
  .catch((error) => console.log(error));

app.use(userRoutes);
app.use(authRoutes);
app.use(messagesRoutes);
app.use(conversationsRoutes);
app.use(participantsRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

errorHandlerRouter(app);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
