const router = require("express").Router();
const { Ingredient } = require("../../models");
const { FoodIngredient } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newNote= await Ingredient.create(req.body);
    const newFoodIngredient = await FoodIngredient.create({
      food_id: req.body.food_id,
      ingredient_id: newNote.id
    })
    res.status(200).json(newNote);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
