const Nutritionist = require('./Nutritionist');
const Patient = require('./Patient');

Nutritionist.hasMany(Patient, {
    foreignKey: 'nutritionist_id',
    onDelete: 'CASCADE'
});

Patient.belongsTo(Nutritionist, {
    foreignKey: 'nutritionist_id',
});

module.exports = {Nutritionist, Patient};