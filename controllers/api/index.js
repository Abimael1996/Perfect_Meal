const router = require("express").Router();

const planRoutes = require("./planRoutes");
const userRoutes = require("./userRoutes");
const clientRoutes = require("./clientRoutes");
const ingredientRoutes = require("./ingredientRoutes");

router.use("/users", userRoutes);
router.use("/plan", planRoutes);
router.use("/client", clientRoutes);
router.use("/ingredients", ingredientRoutes);

module.exports = router;
