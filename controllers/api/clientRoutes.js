const router = require("express").Router();
const { Patient } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newPatient = await Patient.create(req.body);

    res.status(200).json(newPatient);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const patientData = await Patient.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!patientData) {
      res.status(404).json({ message: "No patient found with this id" });
      return;
    }

    res.status(200).json(patientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try{
      const updatedClient = await Patient.update(req.body, {
          where: {
              id: req.params.id,
          },
      })
      res.status(200).json(updatedClient);
  }catch(err){
      res.status(400).json(err);
  }
});

module.exports = router;
