import bodyParser from "body-parser";
import { create } from "express-handlebars";
import express from "express";
import helpers from "./helpers/handlebarsHelpers.js";
import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Routes
import router from "./routes/index.js";
import api from "./routes/api.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

const hbs = create({
  defaultLayout: "main",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  extname: ".hbs",
  helpers
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(router);
app.use(api);
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

// Server on LAN
// app.listen(app.get("port"), 'your.ip.address.here', () => {
//   console.log(`Server on port ${app.get("port")}`);
// });
