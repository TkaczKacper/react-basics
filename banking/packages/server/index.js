const express = require("express");
const { Server } = require("socket.io");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const authRouter = require("./routers/authRouter");
const accountRouter = require("./routers/accountRouter");
const moneyRouter = require("./routers/moneyRouter");

require("dotenv").config();

const server = require("http").createServer(app);

const io = new Server(server, {
   cors: {
      origin: "http://192.168.1.100:3000",
      credential: "true",
   },
});

app.use(helmet());
app.use(
   cors({
      origin: "http://192.168.1.100:3000",
      credentials: true,
   })
);
app.use(express.json());
app.use(
   session({
      secret: process.env.COOKIE_SECRET,
      credentials: true,
      name: process.env.SESSION_NAME,
      resave: true,
      saveUninitialized: false,
      cookie: {
         secure: process.env.environment === "production",
         sameSite: process.env.environment === "production" ? "none" : "lax",
      },
   })
);

app.use("/auth", authRouter);
app.use("/account", accountRouter);
app.use("/money", moneyRouter);

app.get("/", (req, res) => {
   res.json("hi");
});

io.on("connect", (socket) => {});

server.listen(5000, () => {
   console.log("listening on port 5000");
});
