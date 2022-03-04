const router = require("express").Router();
const { Project, Patient } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', withAuth, async (req,res) => {
    try {
        const newPatient = await Patient.create({
            ...req.body,
            Nutritionist_id: req.session.Nutritionist_id,
        });
        res.status(200).json(newPatient):
    }   catch(err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const patientData = await Patient.destroy({
            where: {
                id: req.params.id,
                Nutritionist_id: req.sessionID.Nutritionist_id,
            },
        });

        if (!patientData) {
            res.status(404).json({ message: 'No patient found with this id' });
            return;
        }

        res.status(200).json(patientData);
    }   catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;