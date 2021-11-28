const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

app.use(express.json({ strict: false }));
// app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
  })
);

app.use(cookieParser());

const PORT = 4000;
let server = app.listen(PORT, () => {
  console.log(`🚀 Server is starting on ${PORT}`);
});

module.exports = server;
