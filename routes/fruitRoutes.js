const express = require("express");
const fruitsRouter = express.Router();
const fruitsController = require("../controllers/fruitController");

fruitsRouter.get("/", fruitsController.showAllFruits);
fruitsRouter.get("/:name", fruitsController.showFruit);
fruitsRouter.post("/", fruitsController.createFruit);
fruitsRouter.patch("/:name", fruitsController.updateFruit);
fruitsRouter.delete("/:name", fruitsController.destroy);

module.exports = fruitsRouter;
