const express = require('express');
const app = express();

app.use()

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/privacy', (req, res, next) =>
    res.sendFile(path.join(__dirname, '../privacy.html'))
);

app.get('/', (req, res, next) =>
    res.sendFile(path.join(__dirname, '../index.html'))
);

// authentication router
app.use('/api', require('./routes'));

// Handle 404s
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((error, req, res, next) => {
    let errors = [error];
    if (error.errors) {
        error = error.errors.map(_error => {
            return _error.message;
        });
    } else if (error.original) {
        errors = [error.original.message];
    }
    res.status(error.status || 500).send({ errors });
});

module.exports = app;