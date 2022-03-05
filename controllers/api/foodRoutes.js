const router = require("express").Router();
const { Food } = require("../../models");
const { MealFood } = require('../../models');

router.post("/", async (req, res) => {
    try {
        const newFood = await Food.create(req.body);
        const newMealFood = await MealFood.create({
            meal_id: req.body.meal_id,
            food_id: newFood.id
        });
        res.status(200).json(newFood);
        res.status(200).json(newMealFood)   
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;