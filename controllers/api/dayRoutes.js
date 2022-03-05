const router = require("express").Router();
const { Day } = require("../../models");

router.post("/", async (req, res) => {
    try {
        const newDay = await Day.create(req.body);
        res.status(200).json(newDay);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
