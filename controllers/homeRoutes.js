const router = require("express").Router();

const {
  Patient,
  Nutritionist,
  Meal_Plan,
  Day,
  Meal,
  Day_Meal,
  Ingredient,
  Meal_Ingredient,
} = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/admin", async (req, res) => {
  try {
    const patientsData = await Patient.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    const patients = patientsData.map((patient) =>
      patient.get({ plain: true })
    );
    console.log(patients);
    res.render("adminpage", {
      patients,
    });
  } catch (err) {
    res.status(400).json(err);
  }
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
router.get("/client/plan/", async (req, res) => {
  try {
    //TODO: Get data by plan_id
    res.render("nutritionplan");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
