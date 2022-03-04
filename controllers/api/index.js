const router = require('express').Router();

//Defined the variables to each route. 
const planRoutes = require('./planRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/plan', planRoutes);

module.exports = router;

