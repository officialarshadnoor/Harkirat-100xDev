import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";

const app = express();

const corsOptions = {
  origin: "https://book-store-lime-five.vercel.app", // Specify the origin(s) that are allowed to access the server
  methods: "GET,POST", // Specify the HTTP methods that are allowed
  allowedHeaders: "Content-Type,Authorization", // Specify which headers are allowed in the request
};

app.use(cors(corsOptions));
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;
const DB_URI = process.env.MONGODB_URI;

// connect to mongoDB
try {
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongodb");
} catch (err) {
  console.log(err);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
