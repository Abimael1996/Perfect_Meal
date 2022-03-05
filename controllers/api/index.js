const router = require("express").Router();

//Defined the variables to each route.
const planRoutes = require("./planRoutes");
const userRoutes = require("./userRoutes");
const clientRuotes = require("./clientRoutes");

router.use("/users", userRoutes);
router.use("/plan", planRoutes);
router.use("/client", clientRuotes);

module.exports = router;
