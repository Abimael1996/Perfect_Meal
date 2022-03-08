const router = require("express").Router();

const { MealPlan } = require("../../models");

router.get("/:id", async (req, res) => {
    try{
        const planData = await MealPlan.findAll({
            where: {
                patient_id: req.params.id,
            }
        })
        const plans = planData.map(plan => plan.get({plain: true}));
        res.status(200).json(plans);
    }catch (err){
        res.status(400).json(err);
    }
})

router.post("/", async (req, res) => {
    try{
        const newPlan = await MealPlan.create(req.body);
        res.status(200).json(newPlan);
    }catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;
