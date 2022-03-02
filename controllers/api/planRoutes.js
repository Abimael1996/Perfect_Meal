const router = require("express").Router();

const { MealPlan } = require("../../models");

router.post("/", async (req, res) => {
    try{
        const newPlan = await MealPlan.create(req.body);
        res.status(200).json(newPlan);
    }catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;
