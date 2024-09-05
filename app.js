//Modules
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

//Middlewares
import { AuthCookie } from "./middlewares/CookieAuth.js";

//Directory path
const _dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Configurations
app.use(express.static(_dirname));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload(
  {
    useTempFiles: true,
    tempFileDir: path.join(_dirname, 'public/img')
  }
));

// Routes
app.get("/home", AuthCookie.OnlyLoggedIn, (req, res) => {
  res.sendFile(_dirname + "/index.html");
});

app.get("/register", (req, res) => {
  res.sendFile(_dirname + "/Views/signup.html");
});

app.get("/login", AuthCookie.NotLoggedIn, (req, res) => {
  res.sendFile(_dirname + "/Views/signin.html");
});
