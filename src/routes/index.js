import { Router } from "express";

const router = Router();

// Home
router.get("/", (req, res) => {
  // res.send("Server is running correctly!");

  res.render("home", { title: "Home" });
});

export default router;
