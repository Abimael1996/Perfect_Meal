const router = require("express").Router();

//Defined the variables to each route.
const planRoutes = require("./planRoutes");
const userRoutes = require("./userRoutes");
const clientRuote = require("./clientroute");

router.use("/users", userRoutes);
router.use("/plan", planRoutes);
router.use("/client", clientRuote);

module.exports = router;
