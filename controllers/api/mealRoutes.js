const router = require("express").Router();
const { Meal, Food } = require("../../models");

router.get("/:id", async (req, res) => {
    try {
        const mealData = await Meal.findByPk(req.params.id, {
            include: [{
                model: Food,
            }]
        });
        const meal = mealData.get({plain: true});
        console.log(meal.food[0].id);
        res.status(200).json(meal.food[0].id);
    }catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
});

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