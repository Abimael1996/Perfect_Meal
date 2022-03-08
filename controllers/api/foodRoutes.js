const router = require("express").Router();
const { Food, MealFood, Ingredient } = require("../../models");

router.get("/:id", async (req, res) => {
    try {
        const foodData = await Food.findByPk(req.params.id, {
            include: [{
                model: Ingredient
            }]
        });
        const food = foodData.get({plain: true});
        console.log(food.ingredients[0].id);
        res.status(200).json(food.ingredients[0].id);
    }catch(err) {
        res.status(400).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const newFood = await Food.create(req.body);
        const newMealFood = await MealFood.create({
            meal_id: req.body.meal_id,
            food_id: newFood.id
        });
        console.log(newFood);
        res.status(200).json(newFood);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try{
        const updatedFood = await Food.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        console.log(updatedFood);
        res.status(200).json(updatedFood);
    }catch(err){
        res.status(400).json(err);
    }
})

module.exports = router;