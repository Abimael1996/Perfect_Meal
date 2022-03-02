const router = require("express").Router();

const { Patient, Nutritionist, MealPlan, Day, Meal, DayMeal, Ingredient, MealIngredient } = require("../models");

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

//TODO: change /client/plan/ for /client/plan/:id once db tables are all set.
router.get('/plan/:id', async (req, res) => {
  try {
    //TODO: Get data by plan_id
    const planData = await MealPlan.findOne({
      include: [
        {
          model: Day,
          include: [{
            model: Meal,
            include: [{
              model: Ingredient
            }]
          }]
        }
      ]
    });

    const plan = planData.get({ plain: true });

    //DELETE CONSOLE LOGS
    console.log(plan);
    console.log(plan.days);
    console.log(plan.days[0].meals);

    console.log(plan.days[0].meals[0].ingredients);

    // res.status(200).json(plan);
    res.render('nutritionplan');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
