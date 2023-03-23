const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
var bodyParser = require("body-parser");
const bookRoute = require("./routes/book")
const authorRoute = require("./routes/author")

// Sữ dụng file .env
const dotenv = require("dotenv");

// Giải mã các thông tin gửi lên server từ client
app.use(bodyParser.json());

// block error cors in browser
app.use(cors());

// Lưu lại các action với server
app.use(morgan("common"))
app.listen(8000, () => {
    console.log("Server is running...")
})


// Routes product
app.use("/v1/book", bookRoute);
app.use("/v1/author", authorRoute);


// Connect database
dotenv.config();
mongoose.set("strictQuery", false);
mongoose.connect((process.env.DATABASE_URL), () => {
    console.log("Connect data is success !");
})

// Check connnect database
const db = mongoose.connection;
db.on("error", function (err) {
    console.log(err);
  });
  db.once("open", function () {
    console.log("Kết nối thành công tới CSDL MongoDB");
  });



