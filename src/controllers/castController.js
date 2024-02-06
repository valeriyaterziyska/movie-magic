const router = require('express').Router();

const castservice = require('../services/castService');

router.get('/create', (req, res) => {
    res.render('cast/create');
});

router.post('/create', async(req, res) => {
    const castData = req.body;

    await castservice.create(castData);

    res.redirect('/');
})

module.exports = router;