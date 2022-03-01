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

//TODO: change /client/plan/ for /client/plan/:id once db tables are all set.
router.get('/client/plan/', async (req, res) => {
  try {
    //TODO: Get data by plan_id 
    res.render('nutritionplan');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
