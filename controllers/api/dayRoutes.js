const router = require("express").Router();
const { Day } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    try {
        const newIngredient = await Day.create({
            ...req.body,
            Nutritionist_id: req.session.Nutritionist_id,
        });
        res.status(200).json(newIngredient);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
