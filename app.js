const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
require('./config/passport'); // Passport configuration file

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/community-site', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.urlencoded({ extended: true }));

// Session and Passport setup
app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
const indexRouter = require('./routes/index');
const forumRouter = require('./routes');
const applicationRouter = require('./routes/applications');
const updateRouter = require('./routes/updates');
const galleryRouter = require('./routes/gallery');

app.use('/', indexRouter);
app.use('/forums', forumRouter);
app.use('/apply', applicationRouter);
app.use('/updates', updateRouter);
app.use('/gallery', galleryRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.use((req, res, next) => {
    res.status(404).render('errors/404');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('errors/500');
});
