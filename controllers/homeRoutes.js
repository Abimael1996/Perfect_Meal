const router = require("express").Router();
const { Patient, Nutritionist, MealPlan, Day, Meal, Food, MealFood, Ingredient, FoodIngredient } = require("../models");
const withAuth = require("../utils/auth");

const Vonage = require('@vonage/server-sdk');
const vonage = new Vonage({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECRET
});

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/admin", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID

    const userData = await Nutritionist.findByPk(req.session.user_id, {
      attributes: { exclude: ["last_name", "first_name"] },
    });
    const patientsData = await Patient.findAll({
      where: {
        nutritionist_id: req.session.user_id,
      },
      attributes: {
        exclude: ["password"],
      },
    });

    const user = userData.get({ plain: true });

    const patients = patientsData.map((patient) =>
      patient.get({ plain: true })
    );


    res.render("adminpage", {
      ...user,
      patients,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/client/:id", withAuth, async (req, res) => {
  try {
    const clientData = await Patient.findByPk(req.params.id, {
      include: [{
        model: MealPlan
      }],
      attributes: {
        exclude: ["password"],
      },
    });
    const client = clientData.get({ plain: true });


    const clientsData = await Patient.findAll({
      where: {
        nutritionist_id: req.session.user_id,
      }
    });
    const clients = clientsData.map((client) => client.get({ plain: true }));


    res.render("clientpage", {
      ...client,
      clients,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/client/:id/plan', withAuth, async (req, res) => {
  try {
    const planData = await MealPlan.findOne({
      where: {
        patient_id: req.params.id,
      },
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

    res.render('nutritionplan', {
      plan,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/twofactor', withAuth, (req, res) => {
  return res.render('register', { logged_in: req.session.logged_in });
})

router.post('/verify/', withAuth, async (req, res) => {
  const payload = await req.body
  const phone = payload.phone
  vonage.verify.request({
    number: phone,
    brand: process.env.NEXMO_BRAND_NAME
  }, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      const verifyRequestId = result.request_id;
      console.log('request_id', verifyRequestId);
      res.status = 200
      return res.render('verify', { reqId: verifyRequestId, logged_in: req.session.logged_in })
    }
  });
})

router.post('/cancel/', async (req, res) => {
  const payload = await req.body
  const reqId = payload.reqId
  vonage.verify.control({
    request_id: reqId,
    cmd: 'cancel'
  }, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      res.status = 200
      res.redirect('/')
    }
  });
})

router.post('/check/', withAuth, async (req, res) => {
  const payload = await req.body
  const code = payload.pin
  const reqId = payload.reqId
  vonage.verify.check({
    request_id: reqId,
    code: code
  }, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      const status = result.status
      res.status = 200
      return res.render('result', { status: status, logged_in: req.session.logged_in })
    }
  });
})

module.exports = router;
