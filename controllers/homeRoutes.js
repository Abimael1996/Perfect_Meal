const router = require("express").Router();

const { Patient, Nutritionist, Day, Meal, DayMeal, Ingredient, MealIngredient } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/admin", (req, res) => {
  res.render("adminpage");
});

router.get("/client/:id", async (req, res) => {
  try{
    const clientData = await Patient.findByPk(req.params.id, {
      attributes: {
        exclude: ["password"],
      },
    });
    const client = clientData.get({plain: true});
    console.log(client);
    res.render("clientpage", client);
  }catch(err) {
    res.status(400).json(err);
  }
});

//TODO: change /client/plan/ for /client/plan/:id once db tables are all set.
router.get('/client/:id/plan/', async (req, res) => {
  try {
    //TODO: Get data by plan_id 
    res.render('nutritionplan');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
