const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('applications/form');
});

router.post('/', (req, res) => {
    // Process the application form data
    res.send('Application submitted');
});

module.exports = router;
