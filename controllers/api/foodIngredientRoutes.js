const router = require("express").Router();
const { FoodIngredient } = require("../../models");

router.post("/", async (req, res) => {
    try {
        const newFoodIngredient = await FoodIngredient.create(req.body);
        res.status(200).json(newFoodIngredient);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;