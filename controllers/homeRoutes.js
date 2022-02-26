const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/admin", (req, res) => {
  res.render("adminpage");
});

module.exports = router;
