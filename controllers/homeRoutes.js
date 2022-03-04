const router = require("express").Router();

const { Patient, Nutritionist, MealPlan, Day, Meal, Food, MealFood, Ingredient, FoodIngredient } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/admin", (req, res) => {
  res.render("adminpage");
});

router.get("/client/:id", async (req, res) => {
  try {
    const clientData = await Patient.findByPk(req.params.id, {
      attributes: {
        exclude: ["password"],
      },
    });
    const client = clientData.get({ plain: true });
    console.log(client);
    res.render("adminsview", client);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/client/:id/plan', async (req, res) => {
  try {
    //TODO: Get data by plan_id
    const planData = await MealPlan.findOne({
      include: [
        {
          model: Day,
          include: [{
            model: Meal,
            include: [{
              model: Food,
              include: [{
                model: Ingredient,
              }]
            }]
          }]
        }
      ]
    });

    const plan = planData.get({ plain: true });

    res.render('nutritionplan', plan);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
