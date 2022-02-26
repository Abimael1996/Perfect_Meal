const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
})

router.get('/client', (req, res) => {
    res.render('adminsview');
})

module.exports = router;