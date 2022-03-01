const router = require("express").Router();

const { Patient, Nutritionist, Meal_Plan, Day, Meal, Day_Meal, Ingredient, Meal_Ingredient } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/admin", (req, res) => {
  res.render("adminpage");
});

router.get("/client", (req, res) => {
  res.render("adminsview");
});

module.exports = router;

