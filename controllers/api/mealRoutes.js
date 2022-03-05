const router = require("express").Router();
const { Meal } = require("../../models");

router.post("/", async (req, res) => {
    try {
        const newMeal = await Meal.create(req.body);
        res.status(200).json(newMeal);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;