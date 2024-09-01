const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

// Registration route
router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    User.create({ username, password }, (err, user) => {
        if (err) return res.status(500).send(err);
        req.login(user, (err) => {
            if (err) return res.status(500).send(err);
            res.redirect('/');
        });
    });
});

// Login route
router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
