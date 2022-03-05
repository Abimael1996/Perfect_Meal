const router = require("express").Router();
const { MealFood } = require("../../models");

router.post("/", async (req, res) => {
    try {
        const newMealFood = await MealFood.create(req.body);
        res.status(200).json(newMealFood);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;