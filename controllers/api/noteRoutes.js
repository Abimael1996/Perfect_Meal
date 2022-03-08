const router = require("express").Router();
const { Ingredient } = require("../../models");
const { FoodIngredient } = require("../../models");

// router.get("/", async (req, res) => {
//     try {
//         const ingredientData = Ingredient.findAll({

//         });
//         res.render();
//     } catch (err) {
        
//     }
// });

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

router.get("/:name", async (req, res) => {
  try {
      const noteData = await Ingredient.findAll({
          where: {
              name: req.params.name,
          }
      });
      const notes = noteData.map((note) => noteData.get({plain: true}));
      console.log(notes);
      res.status(200).json(notes);
  }catch(err) {
      res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try{
      const updatedNote = await Ingredient.update(req.body, {
          where: {
              id: req.params.id,
          },
      })
      res.status(200).json(updatedNote);
  }catch(err){
    console.log(err);
      res.status(400).json(err);
  }
})

// router.delete("/:id", withAuth, async (req, res) => {
//   try {
//     const ingredientData = await Ingredient.destroy({
//       where: {
//         id: req.params.id,
//         Nutritionist_id: req.sessionID.Nutritionist_id,
//       },
//     });

//     if (!patientData) {
//       res.status(404).json({ message: "No ingredient found with this id" });
//       return;
//     }

//     res.status(200).json(patientData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
