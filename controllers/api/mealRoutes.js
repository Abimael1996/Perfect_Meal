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

router.delete("/:id", async (req, res) => {
    try {
        const removedMeal = await Meal.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(removedMeal);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;